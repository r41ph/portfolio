import { StoryFn, Meta } from "@storybook/react";

import { Card } from "../../components/Card/Card";
import { CardLinkType } from "../../../types/types";
import { projects } from "../../assets/data";

const meta: Meta<typeof Card> = {
  title: "Portfolio/Components/Card",
  component: Card,
  parameters: { options: { showPanel: true } },
};
export default meta;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  project: projects[0],
};

export const BottomLink = Template.bind({});
BottomLink.args = {
  linkType: CardLinkType.BOTTOM,
  project: projects[0],
};

export const Shadow = Template.bind({});
Shadow.args = {
  $shadow: true,
  project: projects[0],
};
Shadow.storyName = "With Shadow";

export const Description = Template.bind({});
Description.args = {
  project: projects[1],
};
Description.storyName = "With Description";

export const Pill = Template.bind({});
Pill.args = {
  project: projects[2],
};
Pill.storyName = "With Pill";
