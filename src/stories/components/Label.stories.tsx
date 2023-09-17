import type { Meta, StoryObj } from "@storybook/react";
import { ILabelSize, IconType } from "../../../types/types";

import { Label } from "../../components/Label/Label";

const meta: Meta<typeof Label> = {
  title: "Portfolio/Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    text: "React",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    text: "React",
    icon: IconType.REACT,
    size: ILabelSize.MD,
  },
};
WithIcon.name = "With Icon";

export const ExtraSmall: Story = {
  args: {
    text: "React",
    size: ILabelSize.XS,
  },
};
ExtraSmall.name = "Extra small";

export const Small: Story = {
  args: {
    text: "React",
    size: ILabelSize.SM,
  },
};

export const Medium: Story = {
  args: {
    text: "React",
    size: ILabelSize.MD,
  },
};

export const Large: Story = {
  args: {
    text: "React",
    size: ILabelSize.LG,
  },
};
