import axios from "axios";
import { Project } from "../../types/types";

export const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "http://localhost:3000"
    : "http://localhost:3000",
  proxy: false,
});

export async function getWorks() {
  return await api.get("/api/works").then((response) => {
    return response.data as { works: Project[] };
  });
}
export async function getLabs() {
  return await api.get("/api/labs").then((response) => {
    return response.data as { labs: Project[] };
  });
}
