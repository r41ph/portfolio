import { useState, MouseEvent, ChangeEvent, FormEvent, useEffect } from "react";
import {
  Form,
  useSubmit,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ValidationError, number, object, string } from "yup";

import {
  ProjectFormErrors,
  ButtonSize,
  DashboardActionResponse,
  FormDataErrors,
  FormDataType,
  SelectOption,
} from "../../../types/types";
import { FormControl } from "./ProjectForm.styled";
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
import { ActionMeta } from "react-select";
import { FormError } from "../../components/Form/FormError/FormError";

const FORM_DATA_ERRORS: FormDataErrors = {
  PROJECTTYPE: "Required. Select a project type",
  NAME: "Required. Add the project's name",
  STACK: "Required. Select project's stack",
  IMAGE: "Required. Select an image",
  // SITETYPE: "Must be a string",
  URL: "Must be a valid URL",
  // COMPANY: "",
  DESCRIPTION: "Must be max 90 characters",
  POSITION: "Must be higher or equal to 0",
};

const defaultFormData: FormDataType = {
  projectType: { value: "", error: "" },
  name: { value: "", error: "" },
  stack: { value: "", error: "" },
  siteType: { value: "", error: "" },
  url: { value: "", error: "" },
  company: { value: "", error: "" },
  image: { value: "", error: "" },
  description: { value: "", error: "" },
  position: { value: 1, error: "" },
  source: "add-project-form",
};

const projectFormValidationSchema = object().shape({
  projectType: string()
    .oneOf(["Work", "Lab"], FORM_DATA_ERRORS.PROJECTTYPE)
    .required(),
  name: string()
    .min(3, "Name must be min 3 characters")
    .required(FORM_DATA_ERRORS.NAME),
  stack: string().required(FORM_DATA_ERRORS.STACK),
  image: string().required(FORM_DATA_ERRORS.IMAGE),
  siteType: string().notRequired(),
  url: string().url(FORM_DATA_ERRORS.URL).notRequired(),
  company: string().notRequired(),
  description: string().max(90, FORM_DATA_ERRORS.DESCRIPTION).notRequired(),
  position: number().min(-10, FORM_DATA_ERRORS.POSITION).required(),
});

export function ProjectForm({
  title,
  project,
}: {
  title?: string;
  project?: FormDataType;
}) {
  const navigation = useNavigation();
  const submit = useSubmit();
  const actionData = useActionData() as DashboardActionResponse;
  const isSubmitting = navigation.state === "submitting";
  const {
    isLoading,
    data,
    error: errorFetchingFormData,
  } = useQuery({
    queryKey: ["formOptions"],
    queryFn: getFormOptions,
  });
  const formOptionsMutation = useMutation({
    mutationFn: addFormOption,
    onSuccess: () => {
      // TODO: Implement notification system
    },
    onError: () => {
      // Handle error
    },
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormDataType>(defaultFormData);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFormData((formData) => {
        return {
          ...formData,
          image: {
            value: imageUrl,
            error: "",
          },
        };
      });
    }
  };

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: { value, error: "" },
      };
    });
  };

  const handleOnSelectChange = (
    option: SelectOption | null | SelectOption[],
    actionMeta: Partial<ActionMeta<SelectOption>>,
  ) => {
    const { name } = actionMeta;
    let value: string | string[];

    if (Array.isArray(option)) {
      value = option.map((option) => option.value).join(", ");
    } else {
      value = option?.value || "";
    }

    if (name) {
      setFormData({
        ...formData,
        [name]: { value, error: "" },
      });
    }
  };

  const handleOnSubmit = (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const formDataValues = {
      projectType: formData.projectType.value,
      name: formData.name.value,
      stack: formData.stack.value,
      siteType: formData.siteType.value,
      url: formData.url.value,
      company: formData.company.value,
      image: formData.image.value,
      description: formData.description.value,
      position: formData.position.value,
      source: formData.source,
    };
    projectFormValidationSchema
      .validate(formDataValues, { abortEarly: false })
      .then(() => {
        submit(formDataValues, {
          method: "post",
          action: "/dashboard",
          encType: "application/x-www-form-urlencoded",
        });
      })
      .catch((errors) => {
        if (errors instanceof ValidationError) {
          const updatedFormErrors = errors.inner.reduce((formData, error) => {
            return {
              ...formData,
              [error.path as keyof ProjectFormErrors]: {
                value: formData[error.path as keyof ProjectFormErrors]?.value,
                error: error.message,
              },
            };
          }, formData);

          setFormData((formData) => {
            return {
              ...formData,
              ...updatedFormErrors,
            };
          });
        }
      });
  };

  useEffect(() => {
    const validationErrors = actionData?.errors;

    if (Array.isArray(validationErrors) && validationErrors.length) {
      setFormData((currentFormData) => {
        const updatedErrors = Object.fromEntries(
          validationErrors?.map(({ field }) => [
            field,
            {
              value: "",
              error:
                FORM_DATA_ERRORS[
                  (field as string).replace("_", "").toUpperCase()
                ],
            },
          ]),
        );

        return { ...currentFormData, ...updatedErrors };
      });
    } else if (actionData?.valid) {
      setSelectedImage(null);
      setFormData(defaultFormData);
    }
  }, [actionData]);

  useEffect(() => {
    if (project) {
      setFormData(project);
    }
  }, [project]);

  if (errorFetchingFormData) {
    return (
      <p className="text-red">
        Error fetching form data: {errorFetchingFormData.message}
      </p>
    );
  }

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <Form noValidate onSubmit={handleOnSubmit} className="max-w-[420px] w-full">
      <fieldset className="flex flex-col">
        {title && (
          <legend className="text-xl mb-4 dark:animate-dark-fade-in">
            {title}
          </legend>
        )}
        <FormControl>
          <FormError error={formData?.projectType?.error}>
            <Label htmlFor="projectType">Project type*</Label>
            <SelectOptions
              name="projectType"
              options={createSelectOptions(data?.projectType)}
              onChange={handleOnSelectChange}
            />
          </FormError>
        </FormControl>
        <FormControl>
          <FormError error={formData?.position?.error}>
            <Label htmlFor="position">Position</Label>
            <Input
              type="number"
              name="position"
              onChange={handleOnChange}
              value={formData.position.value}
            />
          </FormError>
        </FormControl>
        <FormControl>
          <FormError error={formData?.name?.error}>
            <Label htmlFor="name">Name*</Label>
            <Input
              name="name"
              onChange={handleOnChange}
              value={formData.name.value}
            />
          </FormError>
        </FormControl>
        <FormControl>
          <FormError error={formData?.image?.error}>
            <Label htmlFor="image">Image*</Label>
            <Image img={selectedImage} className="mb-8" />
            <Input
              type="file"
              name="image"
              noBorder
              onChange={handleImageChange}
            />
          </FormError>
        </FormControl>
        <FormControl>
          <FormError error={formData?.stack?.error}>
            <Label htmlFor="stack">Stack*</Label>
            <SelectStack
              name="stack"
              formOptionsMutation={formOptionsMutation}
              options={data?.stack}
              onChange={handleOnSelectChange}
            />
          </FormError>
        </FormControl>
        <FormControl>
          <FormError error={formData?.siteType?.error}>
            <Label htmlFor="siteType">Site type</Label>
            <SelectSiteType
              name="siteType"
              formOptionsMutation={formOptionsMutation}
              options={data?.siteType}
              onChange={handleOnSelectChange}
            />
          </FormError>
        </FormControl>
        <FormControl>
          <FormError error={formData?.url?.error}>
            <Label htmlFor="url">Url</Label>
            <Input
              type="url"
              name="url"
              placeholder="https://example.com"
              onChange={handleOnChange}
              value={formData.url.value}
            />
          </FormError>
        </FormControl>
        <FormControl>
          <FormError error={formData?.company?.error}>
            <Label htmlFor="company">Company</Label>
            <Input
              name="company"
              onChange={handleOnChange}
              value={formData.company.value}
            />
          </FormError>
        </FormControl>
        <FormControl>
          <FormError error={formData?.description?.error}>
            <Label>Description</Label>
            <Textarea
              name="description"
              maxLength={90}
              onChange={handleOnChange}
              value={formData.description.value}
            />
          </FormError>
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
