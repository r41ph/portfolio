import { api } from "./api";
import { Project } from "../../types/types";

export async function getWorks() {
  return await api
    .get("/data/works", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    })
    .then((response) => {
      return response.data as { works: Project[] };
    });
}

export async function getLabs() {
  return await api
    .get("/data/labs", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    })
    .then((response) => {
      return response.data as { labs: Project[] };
    });
}

export async function postProject(type: "works" | "labs", req: Project) {
  return await api
    .post(
      `/data/add/${type}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
        },
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
