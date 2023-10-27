import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppContext, Layout } from "./Layout";

describe("Layout", () => {
  test("renders the header", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <AppContext.Provider
          value={{ state: { projects: [], labs: [] }, setState: () => null }}
        >
          <Layout />
        </AppContext.Provider>
      </BrowserRouter>,
    );
    expect(getByRole("banner")).toBeInTheDocument();
  });

  test("renders the footer", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <AppContext.Provider
          value={{ state: { projects: [], labs: [] }, setState: () => null }}
        >
          <Layout />
        </AppContext.Provider>
      </BrowserRouter>,
    );
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });

  test("does not render the dark mode toggle if there are no projects or labs", () => {
    const { queryByLabelText } = render(
      <BrowserRouter>
        <AppContext.Provider
          value={{ state: { projects: [], labs: [] }, setState: () => null }}
        >
          <Layout />
        </AppContext.Provider>
      </BrowserRouter>,
    );
    expect(queryByLabelText("Dark mode toggle")).not.toBeInTheDocument();
  });
});