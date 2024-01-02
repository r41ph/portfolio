import { FormErrorWrapper } from "./FormError.styled";
import { ReactNode } from "react";

export const FormError = ({
  error = "",
  children,
}: {
  error: string;
  children: ReactNode;
}) => {
  return (
    <FormErrorWrapper $error={error}>
      {children}
      {error && <p className="text-red-dark text-sm mt-2">{error}</p>}
    </FormErrorWrapper>
  );
};
