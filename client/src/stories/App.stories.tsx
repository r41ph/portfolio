import { StoryFn, Meta, Decorator } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "../App";

// React Query and React Router decorators
const Decorators: Decorator = (Story) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Routes>
          <Route path="/*" element={<Story />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

const meta: Meta<typeof App> = {
  title: "Portfolio/Website",
  component: App,
  decorators: [Decorators],
  parameters: { options: { showPanel: false } },
};

export default meta;

const Template: StoryFn<typeof App> = () => <App />;

export const Website = Template.bind({});
