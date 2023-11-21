import { StoryFn, Meta, StoryObj } from "@storybook/react";
// import { RouterProvider, createMemoryRouter } from "react-router-dom";
// import { routes } from "../../src/main.tsx";
// import { doc } from "prettier";
import { createRemixStub } from "@remix-run/testing";
import { Login } from "../../../src/portfolio/Login/Login.tsx";
import { loginAction } from "../../portfolio/Login/Login-action";

// const App = () => {
//   const el = document.createElement("div");
//   el.setAttribute("id", "root");
//   document.body.appendChild(el);
//   return (
//     <div>
//       <RouterProvider
//         router={createMemoryRouter(routes, {
//           initialEntries: ["/work"],
//           initialIndex: 0,
//         })}
//       />
//     </div>
//   );
// };

const meta: Meta<typeof Login> = {
  title: "/Login",
  component: Login,
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/*",
          action: loginAction,
          loader: () => ({ redirect: "/login" }),
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

const Template: StoryFn<typeof Login> = () => <Login />;

export const LoginPage = Template.bind({});
LoginPage.storyName = "Login";
