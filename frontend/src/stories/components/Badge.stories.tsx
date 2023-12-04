import type { Meta, StoryObj } from "@storybook/react";
import { BadgeSize, IconType } from "../../../types/types";

import { Badge } from "../../components/Badge/Badge";

const meta: Meta<typeof Badge> = {
  title: "/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { options: { showPanel: true } },
  args: {
    text: "My Badge",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    text: "Github",
    icon: IconType.GITHUB,
    size: BadgeSize.MD,
  },
};
WithIcon.name = "With Icon";

export const ExtraSmall: Story = {
  args: {
    text: "My Badge",
    size: BadgeSize.XS,
  },
};
ExtraSmall.name = "Extra small";

export const Small: Story = {
  args: {
    text: "My Badge",
    size: BadgeSize.SM,
  },
};

export const Medium: Story = {
  args: {
    text: "My Badge",
    size: BadgeSize.MD,
  },
};

export const Large: Story = {
  args: {
    text: "My Badge",
    size: BadgeSize.LG,
  },
};
