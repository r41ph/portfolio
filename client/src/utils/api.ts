import axios from "axios";
import { Project } from "../../types/types";

export const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "http://localhost:3000"
    : "http://localhost:3000",
  proxy: false,
});

export async function getProjects() {
  return await api.get("/api/projects").then((response) => {
    return response.data as { projects: Project[] };
  });
}
