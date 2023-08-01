import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "twin.macro";

export function Navigation() {
  return (
    <nav>
      <ul tw="flex justify-center items-center dark:text-grey-light">
        <li tw="w-10">
          <NavLink to="/">Work</NavLink>
        </li>
        <li tw="w-20 mx-14">
          <img tw="rounded-full" src={logo} alt="ralph.es" />
        </li>
        <li tw="w-10">
          <NavLink to="/labs">Labs</NavLink>
        </li>
      </ul>
    </nav>
  );
}
