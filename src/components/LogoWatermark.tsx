import logoImg from "@/assets/logo.webp";

type Position = "center" | "left" | "right";

interface LogoWatermarkProps {
  /** Horizontal placement of the watermark within the section. */
  position?: Position;
  /** Use the white version (for dark backgrounds). */
  invert?: boolean;
  /** Override opacity (defaults: 0.05 light, 0.08 inverted). */
  opacity?: number;
  /** Override desktop width in px (default 560). */
  size?: number;
}

/**
 * Subtle, consistent Mega City logo watermark used across sections.
 * - Always vertically centered.
 * - Hidden on mobile to keep layouts clean.
 * - Non-interactive, decorative only.
 */
export function LogoWatermark({
  position = "center",
  invert = false,
  opacity,
  size = 560,
}: LogoWatermarkProps) {
  const finalOpacity = opacity ?? (invert ? 0.08 : 0.05);

  const horizontal =
    position === "left"
      ? { left: "-6%", transform: "translateY(-50%)" }
      : position === "right"
        ? { right: "-6%", transform: "translateY(-50%)" }
        : { left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <img
      src={logoImg}
      alt=""
      aria-hidden="true"
      className="pointer-events-none select-none absolute top-1/2 hidden md:block"
      style={{
        width: `${size}px`,
        maxWidth: "60%",
        opacity: finalOpacity,
        filter: invert ? "brightness(0) invert(1)" : "grayscale(100%)",
        ...horizontal,
        zIndex: 0,
      }}
    />
  );
}
