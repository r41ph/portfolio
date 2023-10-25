import { useEffect, useState } from "react";
import getUnsplashImage from "../../utils/unsplash-api";
import { UnsplashImage } from "../../../types/types";

export function NotFound() {
  const [image, setImage] = useState<UnsplashImage>({
    src: "",
    author: {
      name: "",
      url: "",
    },
  });

  useEffect(() => {
    if (!image.src) {
      getUnsplashImage({
        query: "404",
        orientation: "landscape",
      })
        .then((response) => {
          setImage(response);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg font-bold">Not Found</h1>
      <p className="text-md mb-20">
        The page you are looking for does not exist.
      </p>
      {image.src && (
        <figure className="flex flex-col items-center w-1/2">
          <img className="h-96" src={image.src} alt="404" />
          <figcaption className="text-xs items-end-l mt-1 ml-auto">
            Image by{" "}
            <a className="underline" href={image.author.url}>
              {image.author.name}
            </a>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
