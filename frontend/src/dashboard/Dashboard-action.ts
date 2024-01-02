import { ActionFunction } from "react-router-dom";
import { api } from "../utils/api";
import { AxiosError } from "axios";
import { DashboardActionResponse } from "../../types/types";

export const dashboardAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const dataSource = data.get("source");

  if (dataSource === "add-project-form") {
    const projectData = {
      projectType: data.get("projectType"),
      name: data.get("name"),
      image: data.get("image"),
      stack: data.get("stack"),
      siteType: data.get("siteType"),
      url: data.get("url"),
      company: data.get("company"),
      description: data.get("description"),
      position: data.get("position"),
    };

    return await api
      .post("/data/add/project", projectData)
      .then((): DashboardActionResponse => {
        return {
          valid: true,
          errors: [],
        };
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 500) {
          return { message: "Server error" };
        }
        return {
          valid: false,
          errors: error.response?.data,
        };
      });
  }
};
