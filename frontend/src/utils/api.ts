import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "https://portfolio-api-n2ph.onrender.com/"
    : "http://localhost:3000",
  proxy: false,
});
