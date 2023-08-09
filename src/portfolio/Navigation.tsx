import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export function Navigation() {
  return (
    <nav>
      <ul className="flex justify-center items-center dark:animate-dark-fade-in">
        <li className="w-10 font-semibold">
          <NavLink to="/">Work</NavLink>
        </li>
        <li className="w-20 mx-14">
          <img className="rounded-full" src={logo} alt="ralph.es" />
        </li>
        <li className="w-10 font-semibold">
          <NavLink to="/labs">Labs</NavLink>
        </li>
      </ul>
    </nav>
  );
}
