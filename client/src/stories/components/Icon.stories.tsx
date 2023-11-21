import { Meta, StoryFn } from "@storybook/react";
import { Icon } from "../../components/Icon/Icon";
import { IconSize, Icons } from "../../../types/types";

const meta: Meta<typeof Icon> = {
  title: "/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    type: Icons.GITHUB,
  },
  parameters: { options: { showPanel: true } },
};

export default meta;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { size: IconSize.XS };

export const Small = Template.bind({});
Small.args = { size: IconSize.SM };

export const Medium = Template.bind({});
Medium.args = { size: IconSize.MD };

export const Large = Template.bind({});
Large.args = { size: IconSize.LG };
