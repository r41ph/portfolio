import { deleteFormOption } from "../../../utils/api-data";
import {
  render,
  renderWithWrappers,
  screen,
  userEvent,
} from "../../../test-utils/utils";
import { SelectOptionsCreate } from "./SelectOptionsCreate";

describe("SelectOptionsCreate component", () => {
  const INPUT_TESTID_CSS_CLASS = "input-testid";
  const CONTROL_TESTID_CSS_CLASS = "control-testid";
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  test("renders options correctly", async () => {
    const onChange = vi.fn();

    const { container } = render(
      <SelectOptionsCreate
        name="test-select"
        options={options}
        value={null}
        onChange={onChange}
        onCreateOption={vi.fn()}
        classNames={{
          control: () => CONTROL_TESTID_CSS_CLASS,
        }}
      />,
    );

    const control = container.querySelector(`.${CONTROL_TESTID_CSS_CLASS}`);
    if (control) {
      await userEvent.click(control);

      options.forEach((option) => {
        expect(screen.getByText(option.label)).toBeInTheDocument();
      });
    } else {
      expect(false).toBe(true);
    }
  });

  test("calls onChange when an option is selected", async () => {
    const onChange = vi.fn();

    const { container } = render(
      <SelectOptionsCreate
        name="test"
        options={options}
        value={null}
        onChange={onChange}
        onCreateOption={vi.fn()}
        classNames={{
          control: () => CONTROL_TESTID_CSS_CLASS,
        }}
      />,
    );

    const control = container.querySelector(`.${CONTROL_TESTID_CSS_CLASS}`);
    if (control) {
      await userEvent.click(control);

      const option = screen.getByText("Option 1");
      await userEvent.click(option);

      expect(onChange).toHaveBeenCalledOnce();
    } else {
      expect(false).toBe(true);
    }
  });

  test("calls onCreateOption when a new option is created", async () => {
    const onCreateOption = vi.fn();

    const { container } = render(
      <SelectOptionsCreate
        name="test"
        options={options}
        value={null}
        onChange={vi.fn()}
        onCreateOption={onCreateOption}
        classNames={{
          input: () => INPUT_TESTID_CSS_CLASS,
        }}
      />,
    );

    const input = container
      .querySelector(`.${INPUT_TESTID_CSS_CLASS}`)
      ?.querySelector("input");

    if (input) {
      await userEvent.type(input, "New Option");
      await userEvent.type(input, "{enter}");
      expect(onCreateOption).toHaveBeenCalledOnce();
    } else {
      expect(false).toBe(true);
    }
  });

  test("renders customOption if deleteOption prop is present and delete option", async () => {
    const deleteOption = vi.fn(deleteFormOption);

    const { container } = renderWithWrappers(
      <SelectOptionsCreate
        name="test"
        options={options}
        value={null}
        onChange={vi.fn()}
        onCreateOption={vi.fn()}
        onDeleteOption={deleteOption}
        classNames={{
          input: () => INPUT_TESTID_CSS_CLASS,
          control: () => CONTROL_TESTID_CSS_CLASS,
        }}
      />,
    );

    const input = container
      .querySelector(`.${INPUT_TESTID_CSS_CLASS}`)
      ?.querySelector("input");
    const control = container.querySelector(`.${CONTROL_TESTID_CSS_CLASS}`);

    if (input && control) {
      // create new option
      await userEvent.type(input, "New Option");
      await userEvent.type(input, "{enter}");

      // open select
      await userEvent.click(control);

      // find option delete buttons and delete one option
      const optionsDeleteButton = await screen.findAllByTitle(/delete option/i);
      expect(optionsDeleteButton).toHaveLength(3);
      await userEvent.click(optionsDeleteButton[0]);
      expect(deleteOption).toHaveBeenCalledOnce();
    } else {
      expect(false).toBe(true);
    }
  });
});
