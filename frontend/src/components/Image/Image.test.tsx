import { render, screen } from "@testing-library/react";
import { Image } from "./Image";

describe("Image component", () => {
  test("renders image with provided src and alt attributes", () => {
    const imgSrc = "https://example.com/image.jpg";
    const imgAlt = "Example Image";
    render(<Image img={imgSrc} alt={imgAlt} />);
    const imageElement = screen.getByAltText(imgAlt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", imgSrc);
  });

  test("renders empty image when img prop is null", () => {
    render(<Image img={null} />);
    const imageElement = screen.getByAltText("");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "");
  });

  test("renders empty image when alt prop is not provided", () => {
    render(<Image img="https://example.com/image.jpg" />);
    const imageElement = screen.getByAltText("");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://example.com/image.jpg",
    );
  });
});
