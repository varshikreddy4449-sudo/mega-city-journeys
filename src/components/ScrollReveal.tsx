import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Lightweight scroll-reveal: adds `.is-visible` to any `.reveal` element
 * once it enters the viewport. Uses IntersectionObserver + MutationObserver
 * so elements mounted after route transitions are still picked up.
 * Includes a safety fallback that reveals everything after a short delay
 * so content (and images inside) is never permanently hidden.
 */
export function ScrollReveal() {
  const location = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const revealAll = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) =>
        el.classList.add("is-visible"),
      );
    };

    if (!("IntersectionObserver" in window)) {
      revealAll();
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
      { rootMargin: "0px 0px -5% 0px", threshold: 0.01 },
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    };

    // Observe current elements, then re-scan on next frames in case route
    // children mount asynchronously (lazy components, images, etc.).
    observeAll();
    const r1 = requestAnimationFrame(observeAll);
    const t1 = window.setTimeout(observeAll, 120);

    // Watch for newly added .reveal nodes during the lifetime of this route.
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: if anything is still hidden after 1.2s, force it visible
    // so images never stay invisible due to a missed intersection event.
    const failSafe = window.setTimeout(revealAll, 1200);

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(r1);
      clearTimeout(t1);
      clearTimeout(failSafe);
    };
  }, [location]);

  return null;
}
