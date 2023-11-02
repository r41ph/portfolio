import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../../components/Button/Button";
import { ButtonSize, IconSize, IconType } from "../../../types/types";
import { Icon } from "../../components/Icon/Icon";

const meta: Meta<typeof Button> = {
  title: "Portfolio/Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    size: ButtonSize.SM,
    children: "My Button",
  },
  parameters: { options: { showPanel: true } },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { size: ButtonSize.XS };

export const Small = Template.bind({});
Small.args = { size: ButtonSize.SM };

export const Medium = Template.bind({});
Medium.args = { size: ButtonSize.MD };

export const Large = Template.bind({});
Large.args = { size: ButtonSize.LG };

export const AutoWidth = Template.bind({});
AutoWidth.args = {
  size: ButtonSize.AUTO,
  children: "This is a Button with a very long text",
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.storyName = "With Icon";
ButtonWithIcon.args = {
  size: ButtonSize.AUTO,
  withIcon: true,
  children: (
    <>
      <Icon type={IconType.HTML} size={IconSize.XS} />
      Hello there
    </>
  ),
};
