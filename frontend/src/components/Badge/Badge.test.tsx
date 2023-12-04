import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";
import { IconType } from "../../../types/types";
import { userEvent } from "@storybook/testing-library";
import { describe, expect, test } from "vitest";

describe("Badge", () => {
  test("displays the text and icon passed to it", () => {
    render(<Badge text="test" icon={IconType.GITHUB} />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByTestId(/github/i)).toBeInTheDocument();
  });
  test("calls the callback function when clicked", async () => {
    const mockCallback = vi.fn();
    render(<Badge text="test" callback={mockCallback} />);
    await userEvent.click(screen.getByText("test"));
    expect(mockCallback).toHaveBeenCalled();
  });
});
