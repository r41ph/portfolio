import { Icon } from "../../components/Icon/Icon";
import { IconType } from "../../../types/types";
import { Link } from "../../components/Link/Link";

export const Footer = () => {
  return (
    <footer className="my-10">
      <ul className="flex justify-center">
        <li>
          <Link
            href="https://github.com/r41ph"
            target="_blank"
            rel="noreferrer"
            ariaLabel="Link to r41ph github account"
          >
            <Icon
              className="dark:animate-dark-fade-in"
              type={IconType.GITHUB}
            />
          </Link>
        </li>
        <li className="px-10">
          <Link
            href="https://codepen.io/r41ph"
            target="_blank"
            rel="noreferrer"
            ariaLabel="Link to r41ph codepen account"
          >
            <Icon
              className="dark:animate-dark-fade-in"
              type={IconType.CODEPEN}
            />
          </Link>
        </li>
        <li>
          <Link
            href="mailto:jobs@rgalan.es?subject=Nice portfolio. Let's talk!"
            target="_blank"
            rel="noreferrer"
            ariaLabel="Send email to r41ph"
          >
            <Icon
              className="dark:animate-dark-fade-in"
              type={IconType.ENVELOPE}
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
};
