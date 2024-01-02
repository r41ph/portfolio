import { SelectOption } from "../../types/types";
import { capitalize } from "./string";

/**
 * Utility for creating options for react-select
 * Creates an array of select options from an array of strings.
 * Each option object has a value and a label property.
 * The value property is set to the original string value,
 * and the label property is set to the capitalized version of the string.
 *
 * @param options - An array of strings representing the options.
 * @returns An array of SelectOption objects.
 */
export const createSelectOptions = (options: string[]): SelectOption[] => {
  return options.map((option) => ({
    value: option,
    label: capitalize(option),
  }));
};
