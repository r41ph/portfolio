import { render, screen } from "../../../test-utils/utils";
import { FormError } from "./FormError";

describe("FormError", () => {
  test("should render the error message when error prop is provided", () => {
    const errorMessage = "This is an error message";
    render(<FormError error={errorMessage}>Form content</FormError>);
    const errorText = screen.getByText(errorMessage);
    expect(errorText).toBeInTheDocument();
  });

  test("should not render the error message when error prop is empty", () => {
    render(<FormError error="">Form content</FormError>);
    const paragraph = document.querySelector("p");
    expect(paragraph).toBeNull();
  });
});
