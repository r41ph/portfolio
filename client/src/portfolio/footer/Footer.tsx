import { Icon } from "../../components/Icon/Icon";
import { IconType } from "../../../types/types";

export const Footer = () => {
  return (
    <footer className="my-10">
      <ul className="flex justify-center">
        <li>
          <a
            href="https://github.com/r41ph"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to r41ph github account"
          >
            <Icon
              className="dark:animate-dark-fade-in"
              type={IconType.GITHUB}
            />
          </a>
        </li>
        <li className="px-10">
          <a
            href="https://codepen.io/r41ph"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to r41ph codepen account"
          >
            <Icon
              className="dark:animate-dark-fade-in"
              type={IconType.CODEPEN}
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:jobs@rgalan.es?subject=Nice portfolio. Let's talk!"
            target="_blank"
            rel="noreferrer"
            aria-label="Send email to r41ph"
          >
            <Icon
              className="dark:animate-dark-fade-in"
              type={IconType.ENVELOPE}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};
