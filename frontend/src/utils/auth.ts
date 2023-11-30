import { redirect } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "./api";
import { LoginData } from "../../types/types";
import { LoginError } from "../../../backend/types/types";

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
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // const token: string = (response.data as LoginResponse).token;
      // if (token) {
      //   console.log("🚀 ~ file: auth.ts:31 ~ .then ~ token:", token);
      //   const date = new Date();
      //   date.setDate(date.getDate() + 1);
      //   document.cookie = `token=${token}; Secure; SameSite=None; expires=${date.toUTCString()}; path=/`;
      // }

      return response;
    })
    .catch((error) => {
      console.log("error fetching /auth/login", error);
      return Promise.reject(error);
    });
}

export async function isUserLoggedIn() {
  return await api
    .get("/auth/login/status", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("🚀 ~ file: auth.ts:51 ~ .then ~ response:", response);
      return response.data as boolean;
    })
    .catch((error: AxiosError) => {
      console.log("🚀 ~ file: auth.ts:55 ~ isUserLoggedIn ~ error:", error);
      console.log("isUserLoggedIn error: ", error?.response?.data);
      return null;
    });
}

export async function loginStatusLoader() {
  const loginStatus = await isUserLoggedIn();
  return loginStatus;
}
