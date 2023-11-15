import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import logo from "/images/logo.png";
import { Button } from "../Button/Button";
import { ButtonSize } from "../../../types/types";

export function Navigation() {
  const isLoggedIn = useRouteLoaderData("root") as boolean;
  return (
    <nav className="my-10 z-20 relative">
      <ul className="flex justify-center items-center dark:animate-dark-fade-in">
        <li className="w-10 font-semibold">
          <NavLink to="/">Work</NavLink>
        </li>
        <li className="w-14 mx-14">
          <img className="rounded-full" src={logo} alt="ralph.es" />
        </li>
        <li className="w-10 font-semibold">
          <NavLink to="/labs">Labs</NavLink>
        </li>

        {isLoggedIn ? (
          <li className="ml-14 w-10 font-semibold">
            <Form action="/logout" method="post">
              <Button type="submit" size={ButtonSize.SM}>
                Logout
              </Button>
            </Form>
          </li>
        ) : (
          <li className="w-10 font-semibold">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
