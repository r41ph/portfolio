import { StoryFn, Meta, Decorator } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import App from "../App";

const reactRouterDecorator: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

const meta: Meta<typeof App> = {
  title: "Portfolio/Website",
  component: App,
  decorators: [reactRouterDecorator],
};

export default meta;

const Template: StoryFn<typeof App> = (args) => <App {...args} />;

export const Website = Template.bind({});

Website.args = {
  theme: true,
};
