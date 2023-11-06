import { CardLinkType, Project } from "../../../types/types";
import { Card } from "../Card/Card";

export function CardsGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
      {projects?.map((project: Project) => {
        return (
          <li key={project.name}>
            <Card project={project} linkType={CardLinkType.CENTER} />
          </li>
        );
      })}
    </ul>
  );
}
