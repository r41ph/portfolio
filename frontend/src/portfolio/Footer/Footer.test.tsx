import { render, screen } from "../../test-utils/utils";
import { Footer } from "./Footer";
import { describe, expect, test } from "vitest";

describe("Footer", () => {
  test("should display the correct copyright text", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(
      /© \d{4} r41ph\. All rights reserved\./,
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
