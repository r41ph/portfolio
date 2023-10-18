import { useContext, useEffect } from "react";
import { ActionType, CardLinkType, Project } from "../../types/types";
import { Card } from "../components/Card/Card";
import { AppContext } from "./Layout";
import api from "../utils/api";

export const Work = () => {
  const { state, setState } = useContext(AppContext);

  async function getWorks() {
    return await api.get("/api/projects").then((response) => {
      return response.data as { projects: Project[] };
    });
  }

  useEffect(() => {
    if (!state?.projects?.length) {
      getWorks().then(
        (data) => {
          setState({ type: ActionType.SET_PROJECT, payload: data.projects });
        },
        (err) => {
          console.error("Error fetching projects:", err);
        },
      );
    }
  }, [setState, state?.projects?.length]);

  return (
    <ul className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
      {state?.projects?.map((project: Project) => {
        return (
          <li key={project.name}>
            <Card project={project} linkType={CardLinkType.CENTER} />
          </li>
        );
      })}
    </ul>
  );
};
