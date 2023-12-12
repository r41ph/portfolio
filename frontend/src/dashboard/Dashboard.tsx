import { useSessionTimeout } from "../hooks/use-session-timeout";
import { AddProject } from "./AddProject/AddProject";

export function Dashboard() {
  useSessionTimeout();

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex flex-col justify-center items-center">
        <AddProject />
      </div>
    </div>
  );
}
