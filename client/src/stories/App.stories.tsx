import { StoryFn, Meta, Decorator } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import App from "../App";

const ReactRouterDecorator: Decorator = (Story) => {
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
  decorators: [ReactRouterDecorator],
  parameters: { options: { showPanel: false } },
};

export default meta;

const Template: StoryFn<typeof App> = () => <App />;

export const Website = Template.bind({});
