import { render, screen } from "../../../test-utils/utils";
import { Textarea } from "./Textarea";
import { describe, expect, test } from "vitest";

describe("Textarea", () => {
  test("should render textarea element with correct class", () => {
    render(<Textarea />);
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toBeInTheDocument();
  });

  test("should pass down props to textarea element", () => {
    const placeholder = "Enter your message";
    render(<Textarea placeholder={placeholder} />);
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toHaveAttribute("placeholder", placeholder);
  });
});
