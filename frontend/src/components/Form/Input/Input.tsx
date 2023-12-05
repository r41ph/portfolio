import { InputProps } from "../../../../types/types";

export function Input(props: InputProps) {
  // @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access
  const type = props?.type || "text";
  // @typescript-eslint/no-unsafe-assignment
  const { noBorder, ...rest } = props;
  return (
    <input
      {...rest}
      type={type}
      className={`${noBorder ? "" : "border p-3"} w-full rounded`}
    />
  );
}
