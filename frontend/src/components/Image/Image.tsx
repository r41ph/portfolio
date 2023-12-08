export function Image({
  img,
  alt,
  className,
}: {
  img: string | null;
  alt?: string;
  className?: string;
}) {
  return <img src={img || ""} alt={alt || ""} className={className || ""} />;
}
