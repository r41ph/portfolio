import { getLabs } from "../../utils/api-data";
import { useQuery } from "@tanstack/react-query";
import { CardsGrid } from "../../components/CardsGrid/CardsGrid";
import { LabData } from "../../../types/types";

export const Labs = () => {
  const { isLoading, isError, data, error } = useQuery<LabData>({
    queryKey: ["labs"],
    queryFn: getLabs,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-md text-gray-500 dark:animate-dark-fade-in">
          Loading...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-xl text-gray-500 dark:animate-dark-fade-in">
          Labs can not be displayed at the moment: {error.message}
        </p>
      </div>
    );
  }

  return data?.labs ? (
    <CardsGrid projects={data?.labs} />
  ) : (
    <div className="flex justify-center items-center h-96">
      <p className="text-md text-gray-500 dark:animate-dark-fade-in">
        No labs found.
      </p>
    </div>
  );
};
