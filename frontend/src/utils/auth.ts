import { redirect } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "./api";
import { LoginData, LoginResponse } from "../../types/types";
import { LoginError } from "../../../backend/types/types";

export function logout() {
  return api
    .post("/auth/logout", {}, { withCredentials: true })
    .then(() => {
      return redirect("/");
    })
    .catch((error) => {
      console.log("Logout error:", error);
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
    .then((response: AxiosResponse<LoginResponse>) => {
      const username = response.data.username;
      const token: string = response.data.token;
      if (token && username) {
        sessionStorage.setItem("username", response.data.username as string);
        const date = new Date();
        date.setDate(date.getDate() + 1);
        document.cookie = `token=${token}; Secure; SameSite=None; expires=${date.toUTCString()}; path=/`;
      }

      return response;
    })
    .catch((error) => {
      console.log("Error logging in", error);
      return Promise.reject(error);
    });
}

export async function isUserLoggedIn() {
  return await api
    .get("/auth/login/status", {
      withCredentials: true,
    })
    .then((response) => {
      return response.data as boolean;
    })
    .catch((error: AxiosError) => {
      console.log("Error fetching login status: ", error?.response?.data);
      return null;
    });
}

export async function loginStatusLoader() {
  const loginStatus = await isUserLoggedIn();
  return loginStatus;
}
