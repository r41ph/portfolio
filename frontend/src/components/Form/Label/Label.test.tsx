import { render, screen } from "../../../test-utils/utils";
import { Label } from "./Label";

describe("Label", () => {
  test("renders label with label text and htmlFor", () => {
    const htmlFor = "test-input";
    const labelText = "Test Label";
    render(<Label htmlFor={htmlFor}>{labelText}</Label>);
    const labelElement = screen.getByText(labelText);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute("for", htmlFor);
  });
  test("renders label without htmlFor", () => {
    const labelText = "Test Label";
    render(<Label>{labelText}</Label>);
    const labelElement = screen.getByText(labelText);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).not.toHaveAttribute("for", "htmlFor");
  });
});
