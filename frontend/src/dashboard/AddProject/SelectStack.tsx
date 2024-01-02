import { SelectOptionsCreate } from "../../components/Form/SelectOptionsCreate/SelectOptionsCreate";
import { SelectOption } from "../../../types/types";
import { ActionMeta, MultiValue } from "react-select";
import { useEffect, useState } from "react";
import { UseMutationResult } from "@tanstack/react-query";
import { deleteFormOption } from "../../utils/api-data";
import { createSelectOptions } from "../../utils/form";
import { capitalize } from "../../utils/string";

export const SelectStack = ({
  options,
  formOptionsMutation,
  onChange,
  name,
}: {
  options: string[] | [];
  formOptionsMutation: UseMutationResult<
    void,
    Error,
    { type: string; value: string },
    unknown
  >;
  onChange: (
    option: SelectOption | null | SelectOption[],
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
  name: string;
}) => {
  const [stackOptions, setStackOptions] = useState(
    createSelectOptions(options),
  );
  const [selectedStack, setSelectedStack] = useState<MultiValue<SelectOption>>(
    [],
  );
  const handleChangeStack = (
    newOption: MultiValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => {
    setSelectedStack(newOption);
    if (onChange) {
      onChange(newOption as SelectOption[], actionMeta);
    }
  };
  const handleCreateStackOption = (newOption: string) => {
    const capitalizedOption = capitalize(newOption);
    const option = createSelectOptions([capitalizedOption]);
    setStackOptions((prev = []) => [...prev, ...option]);
    setSelectedStack((prev = []) => [...prev, ...option]);
    formOptionsMutation.mutate({ type: "stack", value: capitalizedOption });

    if (onChange) {
      // Option create doesn't pass a ActionMeta so we have to fake it
      onChange([...selectedStack, ...option], {
        name: "stack",
        action: "create-option",
        option: { value: "newOption", label: "newOption" },
      });
    }
  };
  const handleDeleteStackOption = async (optionToDelete: string) => {
    const newOptions = stackOptions?.filter(
      (option) => option.value !== optionToDelete,
    );
    if (newOptions) {
      setStackOptions(newOptions);
      if (onChange) {
        onChange(newOptions, {
          name: "stack",
          action: "create-option",
          option: { value: "newOption", label: "newOption" },
        });
      }
    }
    setSelectedStack((prev = []) =>
      prev.filter((option) => option.value !== optionToDelete),
    );
    await deleteFormOption({ type: "stack", value: optionToDelete });
  };

  useEffect(() => {
    if (options) {
      const stackOptions = createSelectOptions(options);
      setStackOptions(stackOptions);
    }
  }, [options]);

  return (
    <SelectOptionsCreate
      name={name}
      options={stackOptions}
      value={selectedStack}
      onChange={(option, ActionMeta) => handleChangeStack(option, ActionMeta)}
      onCreateOption={handleCreateStackOption}
      onDeleteOption={handleDeleteStackOption}
      isMulti
    />
  );
};
