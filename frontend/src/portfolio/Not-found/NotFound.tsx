import getUnsplashImage from "../../utils/unsplash-api";
import { useQuery } from "@tanstack/react-query";

export function NotFound() {
  const { data, isLoading } = useQuery({
    queryKey: ["404-image"],
    queryFn: () =>
      getUnsplashImage({
        query: "404",
        orientation: "landscape",
      }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg font-bold">Not Found</h1>
      <p className="text-md mb-20">
        The page you are looking for does not exist.
      </p>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-md text-gray-500">Loading...</p>
        </div>
      ) : (
        <figure className="flex flex-col items-center sm:w-[640px]">
          <img className="w-full" src={data?.src} alt="404" />
          <figcaption className="text-xs items-end-l mt-1 ml-auto">
            Image by{" "}
            <a className="underline" target="_blank" href={data?.author.url}>
              {data?.author.name}
            </a>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
