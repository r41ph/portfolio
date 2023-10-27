import { ReactElement } from "react";
import { RenderOptions, render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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

const wrappers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
};

type RenderWithWrappersResult = {
  user: ReturnType<typeof userEvent.setup>;
} & ReturnType<typeof rtlRender>;

/**
 * Custom render with React Router for @testing-library/react
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 * @param ui the component under test
 * @param options customized test options
 */

const renderWithWrappers = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
  { route = "/" } = {},
): RenderWithWrappersResult => {
  window.history.pushState({}, "", route);
  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: wrappers, ...options }),
  };
};

export * from "@testing-library/react";
export { userEvent };
export { renderWithWrappers };