import type { Decorator, Meta, StoryObj } from "@storybook/react";
import { Navigation } from "../../components/Navigation/Navigation";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const ReactRouterDecorator: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

const meta: Meta<typeof Navigation> = {
  title: "Portfolio/Components/Navigation",
  component: Navigation,
  decorators: [ReactRouterDecorator],
  parameters: { options: { showPanel: false } },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
Default.render = () => <Navigation></Navigation>;
