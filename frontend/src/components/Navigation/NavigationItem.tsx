import { NavLink } from "react-router-dom";

export function NavigationItem({
  to,
  name,
  classNames,
  end = false,
}: {
  to: string;
  name: string;
  classNames?: string;
  end?: boolean;
}) {
  const isEnd = end ? { end: true } : {};
  return (
    <li className={`${classNames ? classNames : ""} m-w-10 font-semibold`}>
      <NavLink to={to} {...isEnd}>
        {name}
      </NavLink>
    </li>
  );
}
