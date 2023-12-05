import { ReactNode } from "react";

export function Label({
  children,
  htmlFor,
}: {
  children: ReactNode;
  htmlFor?: string;
}) {
  const withHtmlFor = htmlFor ? { htmlFor } : {};
  return (
    <label {...withHtmlFor} className="block my-2 dark:animate-dark-fade-in">
      {children}
    </label>
  );
}
