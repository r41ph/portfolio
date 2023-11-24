import { useLoaderData } from "react-router-dom";

export function Dashboard() {
  const username = useLoaderData() as string;

  return (
    <div>
      {username && <p>Hi, {username}</p>}
      <h1>Dashboard</h1>
    </div>
  );
}
