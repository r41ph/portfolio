import { api } from "./api";
import { FormOptions, LabData, Project, WorkData } from "../../types/types";

export async function getWorks() {
  return await api
    .get("/data/works")
    .then((response) => {
      return response.data as WorkData;
    })
    .catch((error) => {
      console.log("Error fetching works", error);
    });
}

export async function getLabs() {
  return await api.get("/data/labs").then((response) => {
    return response.data as LabData;
  });
}

export async function getFormOptions() {
  return await api.get("/data/form/options").then((response) => {
    return response.data as {
      _id: string;
      stack: string[];
      projectType: string[];
      siteType: string[];
    };
  });
}

export async function addProject(type: "works" | "labs", req: Project) {
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

export async function addFormOption(option: { type: string; value: string }) {
  return await api
    .post(`/data/add/form/option`, {
      withCredentials: true,
      option,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function deleteFormOption(option: {
  type: string;
  value: string;
}) {
  return await api
    .post(`/data/delete/form/option`, {
      withCredentials: true,
      option,
    })
    .then((response) => {
      return response.data as FormOptions;
    })
    .catch((error) => {
      console.log(error);
    });
}
