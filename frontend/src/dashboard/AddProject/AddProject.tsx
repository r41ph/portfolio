import { Button } from "../../components/Button/Button";
import {
  AddProjectFormErrors,
  ButtonSize,
  SelectOption,
} from "../../../types/types";
import { Form } from "react-router-dom";
import { FormControl } from "../Dashboard.styled";
import { Input } from "../../components/Form/Input/Input";
import { Label } from "../../components/Form/Label/Label";
import { Textarea } from "../../components/Form/Textarea/Textarea";
import { SelectOptions } from "../../components/Form/SelectOptions/SelectOptions";
import { SelectOptionsCreate } from "../../components/Form/SelectOptionsCreate/SelectOptionsCreate";
import { Image } from "../../components/Image/Image";
import { deleteFormOption } from "../../utils/data";
import { MultiValue, SingleValue } from "react-select";

import { useEffect, useState } from "react";
import { useActionData, useNavigation } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addFormOption, getFormOptions } from "../../utils/data";

const createOptions = (options: string[]): SelectOption[] => {
  return options.map((option) => ({
    value: option,
    label: option.charAt(0).toUpperCase() + option.slice(1),
  }));
};

export function AddProject() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const { isLoading, data, error } = useQuery({
    queryKey: ["formOptions"],
    queryFn: getFormOptions,
  });

  const formOptionsMutation = useMutation({
    mutationFn: addFormOption,
    onSuccess: (x) => {
      console.log("🚀 ~ file: AddProject.tsx:55 ~ AddProject ~ x:", x);
      // TODO: Implement notification system
    },
    onError: (error) => {
      console.log("🚀 ~ file: AddProject.tsx:59 ~ AddProject ~ error:", error);
      // Handle error
    },
  });

  const errors = useActionData() as AddProjectFormErrors;
  const [stackOptions, setStackOptions] = useState<SelectOption[]>();
  // const [newStackOptions, setNewStackOptions] = useState<string[]>([]);
  const [selectedStack, setSelectedStack] = useState<MultiValue<SelectOption>>(
    [],
  );
  const [projectTypeOptions, setProjectTypeOptions] = useState<
    SelectOption[] | undefined
  >(undefined);
  const [siteTypeOptions, setSiteTypeOptions] = useState<
    SelectOption[] | undefined
  >(undefined);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      const stackOptions = createOptions(data?.stack);
      const projectOptions = createOptions(data?.projectType);
      const siteOptions = createOptions(data?.siteType);
      setStackOptions(stackOptions);
      setProjectTypeOptions(projectOptions);
      setSiteTypeOptions(siteOptions);
    }
  }, [data, data?.stack]);

  const handleChangeStack = (newValue: MultiValue<SelectOption>) => {
    setSelectedStack(newValue);
  };

  const handleCreateStackOption = (newOption: string) => {
    const option = createOptions([newOption]);
    setStackOptions((prev = []) => [...prev, ...option]);
    setSelectedStack((prev = []) => [...prev, ...option]);
    // setNewStackOptions((prev = []) => [...prev, newOption]);
    formOptionsMutation.mutate({ type: "stack", value: newOption });
  };

  const handleDeleteStackOption = async (optionToDelete: string) => {
    const newOptions = stackOptions?.filter(
      (option) => option.value !== optionToDelete,
    );
    setStackOptions(newOptions);
    setSelectedStack((prev = []) =>
      prev.filter((option) => option.value !== optionToDelete),
    );
    // setNewStackOptions((prev = []) =>
    //   prev.filter((option) => option !== optionToDelete),
    // );
    await deleteFormOption({ type: "stack", value: optionToDelete });
  };

  const [selectedSiteType, setSelectedSiteType] =
    useState<SingleValue<SelectOption>>();

  const handleChangeSiteType = (newValue: SingleValue<SelectOption>) => {
    setSelectedSiteType(newValue);
  };

  // const [newSiteTypeOptions, setNewSiteTypeOptions] = useState<string[]>([]);

  const handleCreateSiteTypeOption = (newOption: string) => {
    const option = createOptions([newOption]);
    setSiteTypeOptions((prev = []) => [...prev, ...option]);
    setSelectedSiteType(option[0]);
    // setNewSiteTypeOptions((prev = []) => [...prev, newOption]);
    formOptionsMutation.mutate({ type: "siteType", value: newOption });
  };

  const handleDeleteSiteTypeOption = async (optionToDelete: string) => {
    const newOptions = siteTypeOptions?.filter(
      (option) => option.value !== optionToDelete,
    );
    setSiteTypeOptions(newOptions);
    setSelectedSiteType(createOptions([optionToDelete])[0]);
    // setNewSiteTypeOptions((prev = []) =>
    //   prev.filter((option) => option !== optionToDelete),
    // );
    await deleteFormOption({ type: "siteType", value: optionToDelete });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (isLoading || !projectTypeOptions || !siteTypeOptions || !stackOptions) {
    return <p>Loading...</p>;
  }
  return (
    <Form
      method="post"
      action="/dashboard/add-project"
      className="max-w-[420px] w-full"
    >
      <fieldset className="flex flex-col">
        <legend className="text-xl mb-4 dark:animate-dark-fade-in">
          Add new project
        </legend>
        <FormControl>
          <Label htmlFor="project-type">Project type</Label>
          <SelectOptions
            name="project-type"
            options={projectTypeOptions}
            defaultValue={projectTypeOptions?.[0]}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="name">Name</Label>
          <Input name="name" required minLength={3} />
          {errors?.name && <p className="text-red">{errors.name}</p>}
        </FormControl>
        <FormControl>
          <Label htmlFor="image">Image</Label>
          <Image img={selectedImage} className="mb-8" />
          <Input
            type="file"
            name="image"
            noBorder
            required
            onChange={handleImageChange}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="stack">Stack</Label>
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
        </FormControl>
        <FormControl>
          <Label htmlFor="site-type">Site type</Label>
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
          {/* 
            By default, `react-select` doesn't work well with traditional form
            submissions because it doesn't use an actual `select` HTML element
            under the hood, so we send the selected stack in a hidden input field
          */}
          <input
            type="hidden"
            name="site-type"
            value={selectedSiteType?.value}
          />
          {/* <SelectOptions
            name="site-type"
            options={siteTypeOptions}
            defaultValue={siteTypeOptions?.[0]}
            isClearable
          /> */}
        </FormControl>
        <FormControl>
          <Label htmlFor="url">Url</Label>
          <Input
            type="url"
            name="url"
            placeholder="https://example.com"
            pattern="https://.*|http://www.*"
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="company">Company</Label>
          <Input name="company" />
        </FormControl>
        <FormControl>
          <Label>Description</Label>
          <Textarea name="description" maxLength={90} />
        </FormControl>
        {/* <Input type="hidden" name="new-stack-options" value={newStackOptions} /> */}
        <Button
          size={ButtonSize.MD}
          type="submit"
          className="mt-6 dark:animate-dark-fade-in"
          isDisabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Add project"}
        </Button>
      </fieldset>
    </Form>
  );
}
