import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "http://localhost:3000"
    : "http://localhost:3000",
  proxy: false,
});
