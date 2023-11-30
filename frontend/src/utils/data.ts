import { api } from "./api";
import { Project } from "../../types/types";

export async function getWorks() {
  return await api
    .get("/data/works")
    .then((response) => {
      return response.data as { works: Project[] };
    })
    .catch((error) => {
      console.log("Error fetching works", error);
    });
}

export async function getLabs() {
  return await api.get("/data/labs").then((response) => {
    return response.data as { labs: Project[] };
  });
}

export async function postProject(type: "works" | "labs", req: Project) {
  return await api
    .post(
      `/data/add/${type}`,
      {
        withCredentials: true,
      },
      req,
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
