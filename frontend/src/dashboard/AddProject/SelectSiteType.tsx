import { useEffect, useState } from "react";
import { ActionMeta, SingleValue } from "react-select";
import { createSelectOptions } from "../../utils/form";
import { deleteFormOption } from "../../utils/api-data";
import { SelectOption } from "../../../types/types";
import { UseMutationResult } from "@tanstack/react-query";
import { SelectOptionsCreate } from "../../components/Form/SelectOptionsCreate/SelectOptionsCreate";
import { capitalize } from "../../utils/string";

export const SelectSiteType = ({
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
  const [selectedSiteType, setSelectedSiteType] =
    useState<SingleValue<SelectOption>>();
  const [siteTypeOptions, setSiteTypeOptions] = useState<
    SelectOption[] | undefined
  >(undefined);

  const handleChangeSiteType = (
    newValue: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => {
    setSelectedSiteType(newValue);
    if (onChange) {
      onChange(newValue as SelectOption, actionMeta);
    }
  };
  const handleCreateSiteTypeOption = (newOption: string) => {
    const capitalizedOption = capitalize(newOption);
    const option = createSelectOptions([capitalizedOption]);
    setSiteTypeOptions((prev = []) => [...prev, ...option]);
    setSelectedSiteType(option[0]);
    formOptionsMutation.mutate({
      type: "siteType",
      value: capitalizedOption,
    });
  };
  const handleDeleteSiteTypeOption = async (optionToDelete: string) => {
    const newOptions = siteTypeOptions?.filter(
      (option) => option.value !== optionToDelete,
    );
    setSiteTypeOptions(newOptions);
    setSelectedSiteType(createSelectOptions([optionToDelete])[0]);
    await deleteFormOption({ type: "siteType", value: optionToDelete });
  };

  useEffect(() => {
    if (options) {
      const siteOptions = createSelectOptions(options);
      setSiteTypeOptions(siteOptions);
    }
  }, [options]);

  return (
    <SelectOptionsCreate
      name={name}
      options={siteTypeOptions}
      defaultValue={siteTypeOptions?.[0]}
      value={selectedSiteType}
      onChange={(option, actionMeta) =>
        handleChangeSiteType(option, actionMeta)
      }
      onCreateOption={handleCreateSiteTypeOption}
      onDeleteOption={handleDeleteSiteTypeOption}
      isClearable
    />
  );
};
