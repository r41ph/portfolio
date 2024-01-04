import { NavigationItem } from "../components/Navigation/NavigationItem";
import { Navigation } from "../components/Navigation/Navigation";
import { useSessionTimeout } from "../hooks/use-session-timeout";
import { Outlet, useActionData, useNavigate } from "react-router-dom";
import { NavigationLogo } from "../components/Navigation/NavigationLogo";
import { useEffect, useState } from "react";
import { DashboardActionResponse, IconSize, IconType } from "../../types/types";
import { Icon } from "../components/Icon/Icon";
import { SuccessMessage } from "./SuccessMessage.styled";

export function Dashboard() {
  useSessionTimeout();
  const navigate = useNavigate();
  const actionData = useActionData() as DashboardActionResponse;

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (actionData?.valid) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate(-1);
      }, 3000);
    }
  }, [actionData, navigate]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Navigation>
          <NavigationItem
            classNames="mr-5"
            to="/dashboard"
            name="Projects"
            end
          />
          <NavigationItem
            classNames="mr-5"
            to="/dashboard/add-project"
            name="Add Project"
          />
          <NavigationLogo />
          <NavigationItem
            classNames="mr-5"
            to="/dashboard/edit-project"
            name="Edit Project"
          />
          <NavigationItem to="/dashboard/sort-projects" name="Sort Projects" />
        </Navigation>
        {showSuccessMessage ? (
          <SuccessMessage>
            Project successfully added.
            <Icon type={IconType.CHECK} size={IconSize.MD} />
          </SuccessMessage>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
