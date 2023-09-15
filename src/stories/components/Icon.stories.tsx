import { Meta, StoryFn } from "@storybook/react";
import { Icon } from "../../components/Icon/Icon";
import { IIconSize, Icons } from "../../../types/types";

const meta: Meta<typeof Icon> = {
  title: "Portfolio/Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    type: Icons.GITHUBLOGO,
  },
};

export default meta;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { size: IIconSize.XS };

export const Small = Template.bind({});
Small.args = { size: IIconSize.SM };

export const Medium = Template.bind({});
Medium.args = { size: IIconSize.MD };

export const Large = Template.bind({});
Large.args = { size: IIconSize.LG };
