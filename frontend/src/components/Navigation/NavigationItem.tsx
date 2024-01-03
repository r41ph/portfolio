import { NavLink } from "react-router-dom";

export function NavigationItem({ to, name }: { to: string; name: string }) {
  return (
    <li className="m-w-10 font-semibold">
      <NavLink to={to}>{name}</NavLink>
    </li>
  );
}
