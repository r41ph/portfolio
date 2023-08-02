import { ICardLinkType } from "../../types/types";
import { projects } from "../assets/data";
import { Card } from "../components/Card/Card";

export const Work = () => (
  <ul className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
    {projects.map((project) => {
      return (
        <li key={project.name}>
          <Card project={project} linkType={ICardLinkType.CENTER} />
        </li>
      );
    })}
  </ul>
);
