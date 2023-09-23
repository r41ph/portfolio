import { render, screen } from "@testing-library/react";
import { Label } from "./Label";
import { IconType } from "../../../types/types";
import { userEvent } from "@storybook/testing-library";

describe("Label", () => {
  test("displays the text and icon passed to it", () => {
    render(<Label text="test" icon={IconType.GITHUB} />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByTestId(IconType.GITHUB)).toBeInTheDocument();
  });
  test("calls the callback function when clicked", async () => {
    const mockCallback = jest.fn();
    render(<Label text="test" callback={mockCallback} />);
    await userEvent.click(screen.getByText("test"));
    expect(mockCallback).toHaveBeenCalled();
  });
});
