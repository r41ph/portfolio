import { getLabs } from "../../utils/data";
import { useQuery } from "@tanstack/react-query";
import { CardsGrid } from "../../components/CardsGrid/CardsGrid";

export const Labs = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["labs"],
    queryFn: getLabs,
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
          Labs can not be displayed at the moment: {error.message}
        </p>
      </div>
    );
  }

  return data?.labs ? (
    <CardsGrid projects={data?.labs} />
  ) : (
    <div className="flex justify-center items-center h-96">
      <p className="text-md text-gray-500">No labs found.</p>
    </div>
  );
};
