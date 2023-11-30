import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "https://api.ralph.es/"
    : "http://localhost:3000",
  proxy: false,
});
