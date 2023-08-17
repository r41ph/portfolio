import { ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@storybook/testing-library";

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

/**
 * Custom render with React Router for @testing-library/react
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 * @param component the component under test
 * @param options customized test options
 */
const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "", route);
  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: BrowserRouter }),
  };
};

export * from "@testing-library/react";
export { renderWithRouter };
