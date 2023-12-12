import { useState } from "react";
import { Form } from "react-router-dom";
import { useActionData, useNavigation } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import { AddProjectFormErrors, ButtonSize } from "../../../types/types";
import { FormControl } from "../Dashboard.styled";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { Label } from "../../components/Form/Label/Label";
import { Textarea } from "../../components/Form/Textarea/Textarea";
import { SelectOptions } from "../../components/Form/SelectOptions/SelectOptions";
import { Image } from "../../components/Image/Image";
import { SelectStack } from "./SelectStack";
import { SelectSiteType } from "./SelectSiteType";
import { addFormOption, getFormOptions } from "../../utils/api-data";
import { createSelectOptions } from "../../utils/form";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  if (isLoading || !data) {
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
            options={createSelectOptions(data?.projectType)}
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
          <SelectStack
            formOptionsMutation={formOptionsMutation}
            options={data?.stack}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="site-type">Site type</Label>
          <SelectSiteType
            formOptionsMutation={formOptionsMutation}
            options={data?.siteType}
          />
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
