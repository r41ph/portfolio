import { render, fireEvent, screen, act } from "../../test-utils/utils";
import { Button } from "./Button";

describe("Button", () => {
  test("renders children", () => {
    render(<Button>Hello, world!</Button>);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies focus styles when focused", () => {
    render(<Button>Focus me</Button>);
    const button = screen.getByRole("button");
    act(() => {
      button.focus();
    });
    expect(button).toHaveClass("focus-ring");
  });

  test("applies hover styles when hovered", () => {
    render(<Button>Hover me</Button>);
    const button = screen.getByRole("button");
    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle("opacity: 0.6");
    fireEvent.mouseLeave(button);
    expect(button).toHaveStyle("opacity: 1");
  });
});
