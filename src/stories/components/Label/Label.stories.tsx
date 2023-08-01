import type { Meta, StoryObj } from "@storybook/react";
import { IconType } from "../../../../types/types";

import { Label } from "../../../components/Label/Label";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Label> = {
  title: "Portfolio/Components/Label",
  component: Label,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  args: {
    text: "My Label",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   text: 'test',
  // },
};

export default meta;
type Story = StoryObj<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {};

export const WithIcon: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    text: "Redux",
    icon: IconType.REDUX,
  },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
