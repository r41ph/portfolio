import Select, { GroupBase, Props } from "react-select";

export function SelectOptions<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group> & { required?: boolean }) {
  return (
    <Select
      required={props.required}
      name={props.name}
      className="project-type-select"
      options={props.options}
      defaultValue={props.defaultValue}
      isMulti={props.isMulti}
      isClearable={props.isClearable}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          padding: "6px",
          border: "1px solid black",
        }),
      }}
    />
  );
}
