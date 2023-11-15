import type { ActionFunction } from "react-router";
import { redirect } from "react-router-dom";
import { LoginData, LoginError } from "../../../../server/types/types";
import { postLoginForm } from "../../utils/auth";

export const loginAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };
  let errors = {};

  const loginResponse = await postLoginForm(authData);

  if ((loginResponse.data as LoginData).username) {
    return redirect("/dashboard");
  }

  if ((loginResponse.data as LoginError).error) {
    errors = (loginResponse.data as LoginError).error;
    return errors;
  }

  return redirect("/login");
};
