import { redirect } from "react-router-dom";
import { isUserLoggedIn } from "../utils/auth";

export async function dashboardLoader() {
  const isLoggedIn = await isUserLoggedIn();
  if (!isLoggedIn) {
    return redirect("/login");
  }
  return isLoggedIn;
}
