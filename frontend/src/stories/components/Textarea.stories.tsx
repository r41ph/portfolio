import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../components/Form/Label/Label";
import { FormError } from "../../components/Form/FormError/FormError";
import { FormEvent } from "react";
import { Textarea } from "../../components/Form/Textarea/Textarea";

const FormTextarea = ({
  error = "",
  label,
}: {
  error: string;
  label?: string;
}) => {
  const onClick = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="w-64" onSubmit={onClick}>
      <FormError error={error}>
        {label && <Label>{label}</Label>}
        <Textarea />
      </FormError>
    </form>
  );
};

const meta: Meta<typeof FormTextarea> = {
  title: "/Form/Textarea",
  component: FormTextarea,
  tags: ["autodocs"],
  parameters: { options: { showPanel: true } },
};

export default meta;
type Story = StoryObj<typeof FormTextarea>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
};
export const WithError: Story = {
  args: {
    label: "Label",
    error: "There is an error in this textarea.",
  },
};
export const WithErrorAndNoLabel: Story = {
  args: {
    error: "There is an error in this textarea.",
  },
};
