import { render, screen } from "../../test-utils/utils";
import { IconType } from "../../../types/types";
import { Icon } from "./Icon";
import { describe, expect, test } from "vitest";

describe("Icon", () => {
  test("renders the correct icon", () => {
    render(<Icon type={IconType.CSS} />);
    expect(screen.getByTestId("css")).toBeInTheDocument();
  });

  test("renders an Icon with a custom CSS class", () => {
    render(<Icon type={IconType.CSS} className="test-class" />);
    expect(screen.getByTestId("css")).toHaveClass("test-class");
  });
});
