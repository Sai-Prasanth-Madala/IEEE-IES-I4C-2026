export default function Avatar({ image, size = 100, alt = "Guest" }) {
  return (
    <div
      className="
        shrink-0
        overflow-hidden
        rounded-sm
        border border-line
        bg-white
      "
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src={image}
        alt={alt}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-300
          hover:scale-[1.03]
        "
      />
    </div>
  );
}