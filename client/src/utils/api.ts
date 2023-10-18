import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "http://localhost:3000"
    : "http://localhost:3000",
  proxy: false,
});

export default api;
