import { redirect } from "react-router-dom";
import { AxiosResponse } from "axios";
import { api } from "./api";
import { LoginData } from "../../types/types";
import { LoginError } from "../../../server/types/types";

export function logout() {
  return api
    .post("/auth/logout", {}, { withCredentials: true })
    .then(() => {
      return redirect("/");
    })
    .catch((error) => {
      console.log("logout error:", error);
      // Loaders must return a value
      return null;
    });
}

export async function postLoginForm(
  req: LoginData,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<AxiosResponse<LoginData | LoginError, any>> {
  return await api
    .post("/auth/login", req, {
      withCredentials: true,
    })
    .then((response) => response)
    .catch((error) => {
      console.log("error fetching /auth/login", error);
      return Promise.reject(error);
    });
}

export async function getLoginStatus() {
  return await api
    .get("/auth/login", {
      withCredentials: true,
    })
    .then((response) => {
      return response.data as boolean;
    })
    .catch((error) => {
      console.log("error fetching getLoginStatus", error);
      return null;
    });
}

export async function authLoader() {
  const isLoggedIn = await getLoginStatus();
  if (!isLoggedIn) {
    return redirect("/login");
  }
  return isLoggedIn;
}

export async function loginStatusLoader() {
  const loginStatus = await getLoginStatus();
  return loginStatus;
}
