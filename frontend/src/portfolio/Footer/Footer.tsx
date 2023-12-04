import { getYear } from "../../utils/date";

export const Footer = () => {
  return (
    <footer className="mt-12 sm:mt-40 h-9 ">
      <div className="flex justify-center">
        <p className="text-sm dark:animate-dark-fade-in">
          © {getYear()} r41ph. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
