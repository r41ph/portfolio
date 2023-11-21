import { LoaderFunction, redirect } from "react-router-dom";
import { isUserLoggedIn } from "../../../src/utils/auth";

export const loginLoader: LoaderFunction = async () => {
  const isLoggedIn = await isUserLoggedIn();
  if (isLoggedIn) {
    return redirect("/dashboard");
  }
  return null;
};
