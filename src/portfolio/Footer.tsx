import { ReactComponent as GithubLogo } from "../assets/svg/github.svg";
import { ReactComponent as CodePenLogo } from "../assets/svg/codepen.svg";
import { ReactComponent as Envelope } from "../assets/svg/envelope.svg";

export const Footer = () => {
  return (
    <footer className="my-10">
      <ul className="flex justify-center">
        <li>
          <a href="#">
            <GithubLogo />
          </a>
        </li>
        <li className="px-10">
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
