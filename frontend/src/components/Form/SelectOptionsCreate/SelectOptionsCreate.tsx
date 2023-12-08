import CreatableSelect from "react-select/creatable";
import { GroupBase, Props, OptionProps } from "react-select";
import { OptionMutation, SelectOption } from "../../../../types/types";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";

/**
 * CustomOption component for rendering a custom option in a select dropdown.
 * @param deleteOption method triggered when an option is deleted.
 * @returns The rendered CustomOption component.
 */
function CustomOption<
  Option extends SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: OptionProps<Option, IsMulti, Group> & {
    deleteOption: OptionMutation;
  },
) {
  const { data, innerProps, innerRef, deleteOption } = props;
  const [error, setError] = useState("");
  const queryClient = useQueryClient();
  const optionMutation = useMutation({
    mutationFn: deleteOption,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["formOptions"] });
      await queryClient.setQueryData(["formOptions", {}], data);
    },
    onError: (error) => {
      console.log("error deleting option:", error);
      setError("Error deleting option");
    },
  });

  const handleDeleteOption = (e: React.MouseEvent, optionToDelete: Option) => {
    e.stopPropagation();
    optionMutation.mutate(optionToDelete.value);
  };

  return (
    <div
      {...innerProps}
      ref={innerRef}
      className="py-2 px-3 hover:bg-grey-light flex justify-between items-center"
    >
      {data.label}
      {error.length ? ` ==> ${error}` : ""}
      <button
        type="button"
        className="ml-3 text-black p-2 z-50 hover:text-red-dark hover:bg-red-light rounded"
        onClick={(e) => handleDeleteOption(e, data)}
        title="Delete option"
      >
        x
      </button>
    </div>
  );
}

/**
 * Renders a custom select component with the ability to create and delete new options.
 * @param onCreateOption method triggered when a new option is created.
 * @param onDeleteOption method triggered when an option is deleted. Is passed down to the CustomOption component.
 *
 * @returns {JSX.Element} The rendered custom select component.
 */
export function SelectOptionsCreate<
  Option extends SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: Props<Option, IsMulti, Group> & {
    onCreateOption: (inputValue: string) => void;
    onDeleteOption?: OptionMutation;
    name: string;
  },
) {
  const {
    isMulti,
    options,
    value,
    onChange,
    onCreateOption,
    onDeleteOption,
    name,
    classNames,
  } = props;

  let customComponents = {};

  if (onDeleteOption) {
    customComponents = {
      ...customComponents,
      Option: (props: OptionProps<Option, IsMulti, Group>) => (
        <CustomOption {...props} deleteOption={onDeleteOption} />
      ),
    };
  }

  return (
    <CreatableSelect
      name={name}
      isMulti={isMulti}
      options={options}
      value={value}
      onChange={onChange}
      onCreateOption={onCreateOption}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          padding: "6px",
          border: "1px solid #000",
        }),
      }}
      components={customComponents}
      classNames={classNames}
    />
  );
}
