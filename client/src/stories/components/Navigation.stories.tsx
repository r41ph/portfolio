import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Navigation } from "../../components/Navigation/Navigation";
import { createRemixStub } from "@remix-run/testing";

const meta: Meta<typeof Navigation> = {
  title: "/Navigation",
  component: Navigation,
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/*",
          action: () => ({ redirect: "/" }),
          loader: () => ({ redirect: "/" }),
          Component() {
            return <Story />;
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
  parameters: {
    options: { showPanel: true },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

// export const Default: Story = {};
// Default.render = () => <Navigation />;

const Template: StoryFn<typeof Navigation> = () => <Navigation />;

export const MainNavigation = Template.bind({});
MainNavigation.storyName = "Navigation";
