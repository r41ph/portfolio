import { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { createSelectOptions } from "../../utils/form";
import { deleteFormOption } from "../../utils/api-data";
import { SelectOption } from "../../../types/types";
import { UseMutationResult } from "@tanstack/react-query";
import { SelectOptionsCreate } from "../../components/Form/SelectOptionsCreate/SelectOptionsCreate";

export const SelectSiteType = ({
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
  const [selectedSiteType, setSelectedSiteType] =
    useState<SingleValue<SelectOption>>();
  const [siteTypeOptions, setSiteTypeOptions] = useState<
    SelectOption[] | undefined
  >(undefined);

  const handleChangeSiteType = (newValue: SingleValue<SelectOption>) => {
    setSelectedSiteType(newValue);
  };
  const handleCreateSiteTypeOption = (newOption: string) => {
    const option = createSelectOptions([newOption]);
    setSiteTypeOptions((prev = []) => [...prev, ...option]);
    setSelectedSiteType(option[0]);
    formOptionsMutation.mutate({ type: "siteType", value: newOption });
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
    <>
      <SelectOptionsCreate
        name="site-type"
        options={siteTypeOptions}
        defaultValue={siteTypeOptions?.[0]}
        value={selectedSiteType}
        onChange={handleChangeSiteType}
        onCreateOption={handleCreateSiteTypeOption}
        onDeleteOption={handleDeleteSiteTypeOption}
        isClearable
      />
      <input type="hidden" name="site-type" value={selectedSiteType?.value} />
    </>
  );
};
