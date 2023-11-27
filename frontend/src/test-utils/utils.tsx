import { ReactElement } from "react";
import { RenderOptions, render as rtlRender } from "@testing-library/react";
import {
  // BrowserRouter,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { userEvent } from "@storybook/testing-library";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

window.matchMedia =
  window.matchMedia ||
  (() => {
    return {
      matches: false,
      addListener: () => {
        return {};
      },
      removeListener: () => {
        return {};
      },
    };
  });

// const wrappers = ({ children }: { children: React.ReactNode }) => {
//   const queryClient = new QueryClient();
//   return (
//     <BrowserRouter>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </BrowserRouter>
//   );
// };

// type RenderWithWrappersResult = {
//   user: ReturnType<typeof userEvent.setup>;
// } & ReturnType<typeof rtlRender>;

/**
 * Custom render for @testing-library/react with React Router (createMemoryRouter)
 * to be able to use useRouteLoaderData as it must be used within a data router =>
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 * @see https://reactrouter.com/en/main/hooks/use-route-loader-data#userouteloaderdata
 * @see https://stackoverflow.com/a/77257079
 * @param ui the component under test
 * @param options customized test options
 */

const renderWithWrappers = (
  ui: ReactElement,
  path = "/",
  options?: Omit<RenderOptions, "wrapper">,
) => {
  const { pathname } = new URL(`http://www.r41ph.es${path}`);
  const queryClient = new QueryClient();
  const router = createMemoryRouter(
    [
      {
        path: pathname,
        element: (
          <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
        ),
      },
    ],
    { initialEntries: ["/"] },
  );

  return rtlRender(<RouterProvider router={router} />, { ...options });
};

// const renderWithWrappers = (
//   ui: ReactElement,
//   options?: Omit<RenderOptions, "wrapper">,
//   { route = "/" } = {},
// ): RenderWithWrappersResult => {
//   window.history.pushState({}, "", route);
//   return {
//     user: userEvent.setup(),
//     ...rtlRender(ui, { wrapper: wrappers, ...options }),
//   };
// };

export * from "@testing-library/react";
export { userEvent };
export { renderWithWrappers };
