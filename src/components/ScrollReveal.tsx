import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Lightweight scroll-reveal: adds `.is-visible` to any `.reveal` element
 * once it enters the viewport. Uses IntersectionObserver only (no libs).
 * Re-scans on route changes. Honors prefers-reduced-motion via CSS.
 */
export function ScrollReveal() {
  const location = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location]);

  return null;
}
