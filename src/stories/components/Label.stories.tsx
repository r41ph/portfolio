import type { Meta, StoryObj } from "@storybook/react";
import { LabelSize, IconType } from "../../../types/types";

import { Label } from "../../components/Label/Label";

const meta: Meta<typeof Label> = {
  title: "Portfolio/Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    text: "My Label",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    text: "Github",
    icon: IconType.GITHUB,
    size: LabelSize.MD,
  },
};
WithIcon.name = "With Icon";

export const ExtraSmall: Story = {
  args: {
    text: "My Label",
    size: LabelSize.XS,
  },
};
ExtraSmall.name = "Extra small";

export const Small: Story = {
  args: {
    text: "My Label",
    size: LabelSize.SM,
  },
};

export const Medium: Story = {
  args: {
    text: "My Label",
    size: LabelSize.MD,
  },
};

export const Large: Story = {
  args: {
    text: "My Label",
    size: LabelSize.LG,
  },
};
