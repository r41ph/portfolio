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

export default {
  title: "Portfolio/Website",
  component: App,
  decorators: [reactRouterDecorator],
} as Meta<typeof App>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof App> = (args) => <App {...args} />;

export const Website = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Website.args = {
  theme: true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'App',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'App',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'App',
// };
