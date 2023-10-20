import axios from "axios";
import { UnsplashImage } from "../../types/types";

interface UnsplashImageRequest {
  query: string;
  orientation?: "landscape" | "portrait" | "squarish";
  count?: string;
}

const getUnsplashImage = ({
  query,
  orientation,
  count = "1",
}: UnsplashImageRequest): Promise<UnsplashImage> => {
  const request = axios.create({
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    },
  });

  return request
    .get(
      `https://api.unsplash.com/photos/random?query=${encodeURI(query)}${
        orientation ? "&orientation=" + orientation : ""
      }${"&count=" + count}`,
    )
    .then((response): UnsplashImage => {
      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        src: response.data[0].urls.small,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        author: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          name: response.data[0].user.name,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          url: response.data[0].user.links.self,
        },
      };
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
};

export default getUnsplashImage;
