import type { ActionFunction } from "react-router";
import { redirect } from "react-router-dom";
import { LoginError } from "../../../../backend/types/types";
import { postLoginForm } from "../../utils/auth";
import { LoginResponse } from "types/types";

export const loginAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };
  let errors = {};

  const loginResponse = await postLoginForm(authData);
  console.log(
    "🚀 ~ file: Login-action.tsx:16 ~ constloginAction:ActionFunction= ~ loginResponse:",
    loginResponse,
  );

  if ((loginResponse.data as LoginResponse).token) {
    return redirect("/dashboard");
  }

  if ((loginResponse.data as LoginError).error) {
    errors = (loginResponse.data as LoginError).error;
    return errors;
  }

  return redirect("/login");
};
