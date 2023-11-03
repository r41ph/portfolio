import { CardLinkType, Icons } from "../../../types/types";
import { render, screen } from "../../test-utils/utils";
import { Card } from "./Card";
import { describe, expect, test } from "vitest";

describe("Card", () => {
  const project = {
    name: "Test Project",
    stack: [Icons.HTML, Icons.CSS, Icons.JAVASCRIPT],
    company: "Syrox",
    image: "/images/projects/kjlaundry-thumbnail.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  test("renders a Card with a project and no shadow", () => {
    render(<Card project={project} />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    const projectName = screen.getByText(/test project/i);
    expect(projectName).toBeInTheDocument();
    expect(card).not.toHaveClass("with-shadow");
  });

  test("renders a Card with a link that points to a new tab/window", () => {
    render(<Card project={project} linkType={CardLinkType.CENTER} />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("target", "_blank");
  });

  test("renders a Card with shadow", () => {
    render(<Card project={project} $shadow />);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("with-shadow");
  });

  test("renders a Card with description", () => {
    render(<Card project={project} description />);
    const description = screen.getByText(
      /Lorem ipsum dolor sit amet, consectetur adipiscing elit./i,
    );
    expect(description).toBeInTheDocument();
  });

  test("renders a Card with stack labels", () => {
    render(<Card project={project} />);
    const html = screen.getByText(/html/i);
    const css = screen.getByText(/css/i);
    const javascript = screen.getByText(/javascript/i);
    expect(html).toBeInTheDocument();
    expect(css).toBeInTheDocument();
    expect(javascript).toBeInTheDocument();
  });
});
