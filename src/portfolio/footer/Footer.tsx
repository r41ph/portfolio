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
            data-testid="github-link"
          >
            <Icon
              className="dark:animate-dark-fade-in"
              type={IconType.GITHUBLOGO}
            />
          </a>
        </li>
        <li className="px-10">
          <a
            href="https://codepen.io/r41ph"
            target="_blank"
            rel="noreferrer"
            data-testid="codepen-link"
          >
            <Icon
              className="dark:animate-dark-fade-in"
              type={IconType.CODEPENLOGO}
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:jobs@rgalan.es?subject=Nice portfolio. Let's talk!"
            target="_blank"
            rel="noreferrer"
            data-testid="mailto-link"
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
