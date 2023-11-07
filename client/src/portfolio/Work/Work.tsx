import { getWorks } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { CardsGrid } from "../../components/CardsGrid/CardsGrid";

export const Work = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["works"],
    queryFn: getWorks,
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

  return data?.works ? (
    <CardsGrid projects={data?.works} />
  ) : (
    <div className="flex justify-center items-center h-96">
      <p className="text-md text-gray-500">No works to display.</p>
    </div>
  );
};
