import { ReactComponent as GithubLogo } from "../assets/svg/github.svg";
import { ReactComponent as CodePenLogo } from "../assets/svg/codepen.svg";
import { ReactComponent as Envelope } from "../assets/svg/envelope.svg";
import "twin.macro";

export const Footer = () => {
  return (
    <footer tw="my-10">
      <ul tw="flex justify-center">
        <li>
          <a href="#">
            <GithubLogo />
          </a>
        </li>
        <li tw="px-10">
          <a href="#">
            <CodePenLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <Envelope />
          </a>
        </li>
      </ul>
    </footer>
  );
};
