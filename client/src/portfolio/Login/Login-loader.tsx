import { LoaderFunction, redirect } from "react-router-dom";
import { getLoginStatus } from "../../../src/utils/auth";

export const loginLoader: LoaderFunction = async ({ request }) => {
  const isLoggedIn = await getLoginStatus();
  if (isLoggedIn) {
    return redirect("/dashboard");
  }
  return null;
};
