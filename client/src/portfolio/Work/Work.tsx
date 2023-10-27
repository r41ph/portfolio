import { CardLinkType, Project } from "../../../types/types";
import { Card } from "../../components/Card/Card";
import { getProjects } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";

export const Work = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-md text-gray-500">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-xl text-gray-500">
          Projects can not be displayed at the moment: {error.message}
        </p>
      </div>
    );
  }

  return (
    <ul className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
      {data?.projects?.map((project: Project) => {
        return (
          <li key={project.name}>
            <Card project={project} linkType={CardLinkType.CENTER} />
          </li>
        );
      })}
    </ul>
  );
};
