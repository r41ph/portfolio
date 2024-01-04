import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../components/Form/Label/Label";
import { FormError } from "../../components/Form/FormError/FormError";
import { FormEvent } from "react";
import { SelectOptions } from "../../components/Form/SelectOptions/SelectOptions";

const FormSelect = ({
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
        <SelectOptions
          options={[
            {
              value: "Option 1",
              label: "Option 1",
            },
            {
              value: "Option 2",
              label: "Option 2",
            },
          ]}
        />
      </FormError>
    </form>
  );
};

const meta: Meta<typeof FormSelect> = {
  title: "/Form/Select",
  component: FormSelect,
  tags: ["autodocs"],
  parameters: { options: { showPanel: true } },
};

export default meta;
type Story = StoryObj<typeof FormSelect>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
};
export const WithError: Story = {
  args: {
    label: "Label",
    error: "There is an error in this select.",
  },
};
export const WithErrorAndNoLabel: Story = {
  args: {
    error: "There is an error in this select.",
  },
};
