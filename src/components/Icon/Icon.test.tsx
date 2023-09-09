import { render, screen } from "../../test-utils/utils";
import { IconType } from "../../../types/types";
import { Icon } from "./Icon";

describe("Icon", () => {
  test("renders the correct icon", () => {
    render(<Icon type={IconType.CSS} />);
    expect(screen.getByTestId("css")).toBeInTheDocument();
  });

  test("receives the className prop", () => {
    render(<Icon type={IconType.CSS} className="test-class" />);
    expect(screen.getByTestId("css")).toHaveClass("test-class");
  });
});
