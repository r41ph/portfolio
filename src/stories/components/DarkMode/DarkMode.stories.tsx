import type { Meta, StoryObj } from "@storybook/react";
import { DarkMode } from "../../../components/DarkMode/DarkMode";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof DarkMode> = {
  title: "Portfolio/Components/DarkMode",
  component: DarkMode,
  tags: ["autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const darkModeButton = canvas.getByRole("button", {
      name: "Toggle dark mode",
    });
    await expect(darkModeButton).toBeInTheDocument();

    await userEvent.click(darkModeButton, {
      delay: 2000,
    });
    await userEvent.click(darkModeButton);
  },
};

export default meta;
type Story = StoryObj<typeof DarkMode>;

export const Default: Story = {};
