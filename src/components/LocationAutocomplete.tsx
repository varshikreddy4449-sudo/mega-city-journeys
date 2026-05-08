import { useEffect, useId, useMemo, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { locationSuggestions } from "@/data/locationSuggestions";

type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  maxLength?: number;
  ariaLabel?: string;
};

// Google Places integration placeholder.
// To enable Google Places Autocomplete:
//   1. Get an API key with the Places API enabled.
//   2. Add it to your env as VITE_GOOGLE_PLACES_API_KEY.
//   3. The component will automatically load the script and use Google
//      suggestions; otherwise it falls back to the local Hyderabad /
//      Telangana suggestion list defined in src/data/locationSuggestions.ts.
const GOOGLE_KEY: string | undefined = (import.meta as any).env
  ?.VITE_GOOGLE_PLACES_API_KEY;

let googleLoadPromise: Promise<void> | null = null;
function loadGooglePlaces(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject();
  if ((window as any).google?.maps?.places) return Promise.resolve();
  if (!GOOGLE_KEY) return Promise.reject();
  if (googleLoadPromise) return googleLoadPromise;
  googleLoadPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&libraries=places`;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject();
    document.head.appendChild(s);
  });
  return googleLoadPromise;
}

export function LocationAutocomplete({
  name,
  value,
  onChange,
  placeholder,
  className,
  required,
  maxLength = 160,
  ariaLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const [googleSuggestions, setGoogleSuggestions] = useState<string[]>([]);
  const [usingGoogle, setUsingGoogle] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<any>(null);
  const listId = useId();

  useEffect(() => {
    if (!GOOGLE_KEY) return;
    loadGooglePlaces()
      .then(() => {
        const g = (window as any).google;
        if (g?.maps?.places?.AutocompleteService) {
          serviceRef.current = new g.maps.places.AutocompleteService();
          setUsingGoogle(true);
        }
      })
      .catch(() => {
        /* fall back silently */
      });
  }, []);

  // close on outside click
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // fetch google predictions when typing
  useEffect(() => {
    if (!usingGoogle || !serviceRef.current) return;
    if (!value || value.length < 2) {
      setGoogleSuggestions([]);
      return;
    }
    let cancelled = false;
    serviceRef.current.getPlacePredictions(
      {
        input: value,
        componentRestrictions: { country: "in" },
      },
      (predictions: any[] | null) => {
        if (cancelled) return;
        setGoogleSuggestions(
          (predictions ?? []).map((p) => p.description).slice(0, 6),
        );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [value, usingGoogle]);

  const fallbackMatches = useMemo(() => {
    const q = value.trim().toLowerCase();
    if (!q) return locationSuggestions.slice(0, 6);
    return locationSuggestions
      .filter((s) => s.toLowerCase().includes(q))
      .slice(0, 8);
  }, [value]);

  const suggestions = usingGoogle ? googleSuggestions : fallbackMatches;

  const select = (s: string) => {
    onChange(s);
    setOpen(false);
    setHighlight(-1);
    inputRef.current?.blur();
  };

  return (
    <div ref={wrapperRef} className="relative">
      <input
        ref={inputRef}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
          setHighlight(-1);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (!open || suggestions.length === 0) return;
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlight((h) => Math.min(h + 1, suggestions.length - 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlight((h) => Math.max(h - 1, 0));
          } else if (e.key === "Enter" && highlight >= 0) {
            e.preventDefault();
            select(suggestions[highlight]);
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        autoComplete="off"
        aria-label={ariaLabel}
        aria-autocomplete="list"
        aria-controls={listId}
        aria-expanded={open}
        className={className}
      />
      {open && suggestions.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-64 overflow-auto rounded-lg border border-border bg-white py-1 shadow-lg"
        >
          {suggestions.map((s, i) => (
            <li
              key={s + i}
              role="option"
              aria-selected={highlight === i}
              onMouseDown={(e) => {
                e.preventDefault();
                select(s);
              }}
              onMouseEnter={() => setHighlight(i)}
              className={
                "flex cursor-pointer items-start gap-2 px-3 py-2 text-sm " +
                (highlight === i
                  ? "bg-accent/10 text-foreground"
                  : "text-foreground/90 hover:bg-muted/40")
              }
            >
              <MapPin className="mt-0.5 h-3.5 w-3.5 flex-none text-accent" />
              <span className="leading-snug">{s}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
