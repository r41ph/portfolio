import { ActionFunction, redirect } from "react-router-dom";

export interface Errors {
  name?: string;
}

export const dashboardAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const projectData = {
    projectType: data.get("projectType"),
    name: data.get("name"),
    stack: data.get("stack"),
    siteType: data.get("siteType"),
    url: data.get("url"),
    company: data.get("company"),
    image: data.get("image"),
    decription: data.get("decription"),
    // newStackOptions: data.get("new-stack-options"),
  };

  const errors: Errors = {};

  if (typeof projectData.name !== "string" || projectData.name.length < 6) {
    errors.name = "Name must be > 3 characters";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  return redirect("/dashboard");

  // otherwise create the user and redirect
  // await createUser(email, password);
  // return redirect("/dashboard");
};
