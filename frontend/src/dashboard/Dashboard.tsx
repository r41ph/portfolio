import { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { ButtonSize, SelectOption } from "../../types/types";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { Errors } from "./Dashboard-action";
import { useSessionTimeout } from "../hooks/use-session-timeout";
import { FormControl } from "./Dashboard.styled";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addStackOption, getFormOptions } from "../utils/data";
import { Input } from "../components/Form/Input/Input";
import { Label } from "../components/Form/Label/Label";
import { Textarea } from "../components/Form/Textarea/Textarea";
import { SelectOptions } from "../components/Form/SelectOptions/SelectOptions";
import { SelectOptionsCreate } from "../components/Form/SelectOptionsCreate/SelectOptionsCreate";
import { Image } from "../components/Image/Image";
import { MultiValue } from "react-select";
import { deleteStackOption } from "../utils/data";

const createOptions = (options: string[]): SelectOption[] => {
  return options.map((option) => ({
    value: option,
    label: option.charAt(0).toUpperCase() + option.slice(1),
  }));
};

export function Dashboard() {
  useSessionTimeout();
  const navigation = useNavigation();
  const errors = useActionData() as Errors;
  const isSubmitting = navigation.state === "submitting";
  const [stackOptions, setStackOptions] = useState<SelectOption[]>();
  const [newStackOptions, setNewStackOptions] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<
    MultiValue<SelectOption>
  >([]);
  const [projectTypeOptions, setProjectTypeOptions] = useState<
    SelectOption[] | undefined
  >(undefined);
  const [siteTypeOptions, setSiteTypeOptions] = useState<
    SelectOption[] | undefined
  >(undefined);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isLoading, data, error } = useQuery({
    queryKey: ["formOptions"],
    queryFn: getFormOptions,
  });

  const stackMutation = useMutation({
    mutationFn: addStackOption,
    onSuccess: (x) => {
      console.log("🚀 ~ file: Dashboard.tsx:60 ~ Dashboard ~ x:", x);
    },
    onError: () => {
      // Handle error
    },
  });

  useEffect(() => {
    if (data) {
      const stackOptions = createOptions(data[0]?.stack);
      const projectOptions = createOptions(data[0]?.projectType);
      const siteOptions = createOptions(data[0]?.siteType);
      setStackOptions(stackOptions);
      setProjectTypeOptions(projectOptions);
      setSiteTypeOptions(siteOptions);
    }
  }, [data]);

  const handleChangeOption = (newValue: MultiValue<SelectOption>) => {
    setSelectedOptions(newValue);
  };

  const handleCreateStackOption = (newOption: string) => {
    const option = createOptions([newOption]);
    setStackOptions((prev = []) => [...prev, ...option]);
    setSelectedOptions((prev = []) => [...prev, ...option]);
    setNewStackOptions((prev = []) => [...prev, newOption]);
    stackMutation.mutate(newOption);
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
    <div>
      <h1>Dashboard</h1>
      <div className="flex flex-col justify-center items-center">
        <Form method="post" className="max-w-[420px] w-full">
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
              <Input name="name" required minLength={6} />
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
                name="stack"
                options={stackOptions}
                value={selectedOptions}
                onChange={handleChangeOption}
                onCreateOption={handleCreateStackOption}
                onDeleteOption={deleteStackOption}
                isMulti
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="site-type">Site type</Label>
              <SelectOptions
                name="site-type"
                options={siteTypeOptions}
                defaultValue={siteTypeOptions?.[0]}
                isClearable
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="url">Url</Label>
              <Input
                type="url"
                name="url"
                placeholder="https://example.com"
                pattern="https://.*"
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
            <Input
              type="hidden"
              name="new-stack-options"
              value={newStackOptions}
            />
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
      </div>
    </div>
  );
}
