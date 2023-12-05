import { render, screen } from "../../../test-utils/utils";
import { Input } from "./Input";

describe("Input component", () => {
  test("renders input element with default type 'text'", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("renders input element with specified type", () => {
    render(<Input type="url" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "url");
  });

  test("renders input element without border when 'noBorder' prop is true", () => {
    render(<Input noBorder />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toHaveClass("border", { exact: false });
  });

  test("renders input element with border when 'noBorder' prop is false", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("border");
  });
});
