import { Badge } from "../Badge/Badge";
import { CardLinkType, BadgeSize, Project } from "../../../types/types";
import { CardWrapper, CardContent, CardCaption } from "./Card.styled";
import tw from "twin.macro";
import { AriaFocusRingProps, useFocusRing } from "@react-aria/focus";
import { MouseEvent } from "react";

type CardProps = {
  project: Project;
  linkType?: CardLinkType;
  $shadow?: boolean; // See https://styled-components.com/docs/api#transient-props
} & AriaFocusRingProps;

export function Card(props: CardProps) {
  const { project, linkType = CardLinkType.CENTER, $shadow } = props;
  const { isFocusVisible, focusProps } = useFocusRing(props);
  const styles = {
    center: {
      link: tw`border-solid border-2 border-white h-full w-full z-50 hover:animate-border-scale flex justify-center items-center flex-col opacity-0`,
      text: tw`bg-white bg-opacity-80 text-blue-dark px-3 py-0 h-12 w-14 flex justify-center items-center text-lg`,
    },
    bottom: {
      link: tw`opacity-0 hover:opacity-80 w-full h-full flex flex-col justify-end`,
      text: tw`text-blue-dark bg-white px-1 py-3 flex justify-center items-center text-lg`,
    },
  };

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement>,
    url: string | undefined,
  ) => {
    if (!url) {
      e.preventDefault();
    }
  };

  return (
    <CardWrapper
      $shadow={$shadow}
      className={$shadow ? "with-shadow" : ""}
      data-testid="card"
    >
      <CardContent image={project.image}>
        <a
          {...focusProps}
          className={`${isFocusVisible ? "focus-ring" : ""}`}
          href={project.url ? project.url : ""}
          target="_blank"
          rel="noopener noreferrer"
          css={[styles[linkType].link]}
          onClick={(event) => handleClick(event, project?.url)}
        >
          <span css={[styles[linkType].text]}>
            {project.url ? "Visit" : " Offline "}
          </span>
        </a>
      </CardContent>
      <CardCaption>
        <h2 className="text-base pb-2 dark:animate-dark-fade-in flex justify-between">
          {project.name}{" "}
          {project.siteType && (
            <Badge text={project.siteType} size={BadgeSize.XS} />
          )}
        </h2>

        {project.description && (
          <p className="text-sm pb-2 min-h-[50px] dark:animate-dark-fade-in">
            {project.description}
          </p>
        )}
        {project.stack.map((tech) => (
          <Badge key={tech} text={tech} />
        ))}
      </CardCaption>
    </CardWrapper>
  );
}
