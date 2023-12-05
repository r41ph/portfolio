export function Image({ img, alt }: { img: string | null; alt?: string }) {
  return <img src={img || ""} alt={alt ? alt : ""} />;
}
