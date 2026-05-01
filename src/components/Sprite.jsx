import PropTypes from "prop-types";
export default function Sprite({
  src,
  alt,
  delay = "0s",
  size = "w-16",
  left,
  right,
  center = false,
}) {
  const positionClass = center
    ? "left-1/2 -translate-x-1/2"
    : "";

  return (
    <img
      src={src}
      alt={alt}
      className={`pointer-events-none select-none absolute z-20 ${size} ${positionClass} pixel-float drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]`}
      style={{
        top: "-75px",
        left: center ? undefined : left,
        right: center ? undefined : right,
        animationDelay: delay,
        imageRendering: "pixelated",
      }}
    />
  );
}

Sprite.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    delay: PropTypes.string,
    size: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    center: PropTypes.bool,
};