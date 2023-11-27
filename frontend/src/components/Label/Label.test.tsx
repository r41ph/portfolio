import { render, screen } from "@testing-library/react";
import { Label } from "./Label";
import { IconType } from "../../../types/types";
import { userEvent } from "@storybook/testing-library";
import { describe, expect, test } from "vitest";

describe("Label", () => {
  test("displays the text and icon passed to it", () => {
    render(<Label text="test" icon={IconType.GITHUB} />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByTestId(/github/i)).toBeInTheDocument();
  });
  test("calls the callback function when clicked", async () => {
    const mockCallback = vi.fn();
    render(<Label text="test" callback={mockCallback} />);
    await userEvent.click(screen.getByText("test"));
    expect(mockCallback).toHaveBeenCalled();
  });
});