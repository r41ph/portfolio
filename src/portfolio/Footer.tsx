import { Icon } from "../components/Icon/Icon";
import { IconType } from "../../types/types";

export const Footer = () => {
  return (
    <footer className="my-10">
      <ul className="flex justify-center">
        <li>
          <a href="#">
            <Icon
              className=" dark:animate-dark-fade-in"
              type={IconType.GITHUBLOGO}
            />
          </a>
        </li>
        <li className="px-10">
          <a href="#">
            <Icon
              className=" dark:animate-dark-fade-in"
              type={IconType.CODEPENLOGO}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon
              className=" dark:animate-dark-fade-in"
              type={IconType.ENVELOPE}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};
