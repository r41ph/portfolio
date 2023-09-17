import { StoryFn, Meta } from "@storybook/react";

import { Card } from "../../components/Card/Card";
import { ICardLinkType } from "../../../types/types";
import { projects } from "../../assets/data";

const meta: Meta<typeof Card> = {
  title: "Portfolio/Components/Card",
  component: Card,
};
export default meta;

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
Shadow.storyName = "With Shadow";

export const Description = Template.bind({});
Description.args = {
  description: true,
};
Description.storyName = "With Description";
