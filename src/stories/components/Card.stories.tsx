import { StoryFn, Meta } from "@storybook/react";

import { Card } from "../../components/Card/Card";
import { ICardLinkType } from "../../../types/types";
import { projects } from "../../assets/data";

export default {
  title: "Portfolio/Components/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
  <Card {...args} project={projects[0]} />
);

export const Default = Template.bind({});

export const BottomLink = Template.bind({});
BottomLink.args = {
  linkType: ICardLinkType.BOTTOM,
};

export const Shadow = Template.bind({});
Shadow.args = {
  $shadow: true,
};
export const Description = Template.bind({});
Description.args = {
  description: true,
};
