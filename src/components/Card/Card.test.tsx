import { ICardLinkType, Icons } from "../../../types/types";
import { render, screen } from "../../test-utils/utils";
import { Card } from "./Card";

describe("Card", () => {
  const project = {
    name: "Test Project",
    stack: [Icons.HTML, Icons.CSS, Icons.JAVASCRIPT],
    company: "Syrox",
    image: "/src/assets/images/projects/kjlaundry-thumbnail.jpg",
  };

  test("renders a Card component with a project and no shadow", () => {
    render(<Card project={project} />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    const projectName = screen.getByText(/test project/i);
    expect(projectName).toBeInTheDocument();
    expect(card).not.toHaveClass("with-shadow");
  });

  test("renders a Card component with a link that points to a new tab/window", () => {
    render(<Card project={project} linkType={ICardLinkType.CENTER} />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("target", "_blank");
  });

  test("renders a Card component no shadow by default", () => {
    render(<Card project={project} />);
    const card = screen.getByTestId("card");
    expect(card).not.toHaveClass("with-shadow");
  });

  test("renders a Card component with shadow", () => {
    render(<Card project={project} withShadow />);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("with-shadow");
  });
});
