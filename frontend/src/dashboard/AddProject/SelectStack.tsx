import { SelectOptionsCreate } from "../../components/Form/SelectOptionsCreate/SelectOptionsCreate";
import { SelectOption } from "../../../types/types";
import { MultiValue } from "react-select";
import { useEffect, useState } from "react";
import { UseMutationResult } from "@tanstack/react-query";
import { deleteFormOption } from "../../utils/api-data";
import { createSelectOptions } from "../../utils/form";

export const SelectStack = ({
  options,
  formOptionsMutation,
}: {
  options: string[] | [];
  formOptionsMutation: UseMutationResult<
    void,
    Error,
    { type: string; value: string },
    unknown
  >;
}) => {
  const [stackOptions, setStackOptions] = useState(
    createSelectOptions(options),
  );
  const [selectedStack, setSelectedStack] = useState<MultiValue<SelectOption>>(
    [],
  );
  const handleChangeStack = (newValue: MultiValue<SelectOption>) => {
    setSelectedStack(newValue);
  };
  const handleCreateStackOption = (newOption: string) => {
    const option = createSelectOptions([newOption]);
    setStackOptions((prev = []) => [...prev, ...option]);
    setSelectedStack((prev = []) => [...prev, ...option]);
    formOptionsMutation.mutate({ type: "stack", value: newOption });
  };
  const handleDeleteStackOption = async (optionToDelete: string) => {
    const newOptions = stackOptions?.filter(
      (option) => option.value !== optionToDelete,
    );
    if (newOptions) {
      setStackOptions(newOptions);
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
    <>
      <SelectOptionsCreate
        name="stack-create"
        options={stackOptions}
        value={selectedStack}
        onChange={handleChangeStack}
        onCreateOption={handleCreateStackOption}
        onDeleteOption={handleDeleteStackOption}
        isMulti
      />

      {/* 
        By default, `react-select` doesn't work well with traditional form
        submissions because it doesn't use an actual `select` HTML element
        under the hood, so we send the selected stack in a hidden input field
      */}
      <input
        type="hidden"
        name="stack"
        value={selectedStack.map((option) => option.value).join(",")}
      />
    </>
  );
};
