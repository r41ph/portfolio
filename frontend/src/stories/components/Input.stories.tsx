import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/Form/Input/Input";
import { Label } from "../../components/Form/Label/Label";
import { FormError } from "../../components/Form/FormError/FormError";
import { FormEvent } from "react";

const FormInput = ({
  error = "",
  placeholder = "",
  label,
}: {
  error: string;
  placeholder?: string;
  label?: string;
}) => {
  const onClick = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="w-64" onSubmit={onClick}>
      <FormError error={error}>
        {label && <Label>{label}</Label>}
        <Input placeholder={placeholder} />
      </FormError>
    </form>
  );
};

const meta: Meta<typeof FormInput> = {
  title: "/Form/Text Input",
  component: FormInput,
  tags: ["autodocs"],
  parameters: { options: { showPanel: true } },
  args: {
    error: "",
    placeholder: "",
    label: "",
  },
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
};
export const WithError: Story = {
  args: {
    label: "Label",
    error: "There is an error in this input field.",
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Enter email",
  },
};
