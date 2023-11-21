import { DarkMode } from "../DarkMode/DarkMode";
import { TopBarWrapper, TopBarList, TopBarItem } from "./TopBar.styled";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import { Button } from "../Button/Button";
import { ButtonSize, IconSize } from "../../../types/types";
import { Icon } from "../../components/Icon/Icon";
import { IconType } from "../../../types/types";
import { Link } from "../../components/Link/Link";

export function TopBar() {
  const isLoggedIn = useRouteLoaderData("root") as boolean;

  return (
    <TopBarWrapper>
      <TopBarList>
        <TopBarItem>
          <Link
            className="block"
            href="/storybook"
            target="_self"
            rel="noreferrer"
            ariaLabel="Link to r41ph storybook"
          >
            <Icon
              title
              className="dark:animate-dark-fade-in"
              type={IconType.STORYBOOK}
              size={IconSize.SM}
            />
          </Link>
        </TopBarItem>
        <TopBarItem>
          <Link
            className="block"
            href="https://github.com/r41ph"
            target="_blank"
            rel="noreferrer"
            ariaLabel="Link to r41ph github account"
          >
            <Icon
              title
              className="dark:animate-dark-fade-in"
              type={IconType.GITHUB}
              size={IconSize.SM}
            />
          </Link>
        </TopBarItem>
        <TopBarItem>
          <Link
            className="block"
            href="https://codepen.io/r41ph"
            target="_blank"
            rel="noreferrer"
            ariaLabel="Link to r41ph codepen account"
          >
            <Icon
              title
              className="dark:animate-dark-fade-in"
              type={IconType.CODEPEN}
              size={IconSize.SM}
            />
          </Link>
        </TopBarItem>
        <TopBarItem>
          <Link
            className="block"
            href="mailto:jobs@rgalan.es?subject=Nice portfolio. Let's talk!"
            target="_blank"
            rel="noreferrer"
            ariaLabel="Send email to r41ph"
          >
            <Icon
              title
              className="dark:animate-dark-fade-in"
              type={IconType.CONTACT}
              size={IconSize.SM}
            />
          </Link>
        </TopBarItem>
        <TopBarItem>
          {isLoggedIn ? (
            <Form action="/logout" method="post">
              <Button type="submit" size={ButtonSize.AUTO} noBorder>
                <Icon
                  title
                  className="dark:animate-dark-fade-in"
                  type={IconType.LOGOUT}
                  size={IconSize.SM}
                />
              </Button>
            </Form>
          ) : (
            <NavLink to="/login">
              <Icon
                title
                className="dark:animate-dark-fade-in"
                type={IconType.LOGIN}
                size={IconSize.SM}
              />
            </NavLink>
          )}
        </TopBarItem>
        <TopBarItem>
          <DarkMode />
        </TopBarItem>
      </TopBarList>
    </TopBarWrapper>
  );
}
