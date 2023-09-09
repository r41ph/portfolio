import type { Meta, StoryObj } from "@storybook/react";
import { IconType } from "../../../../types/types";

import { Label } from "../../../components/Label/Label";

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
    text: "Redux",
    icon: IconType.REDUX,
  },
};
