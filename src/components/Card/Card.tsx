import { Label } from "../../components/Label/Label";
import { ICardLinkType, IProject } from "../../../types/types";
import { CardWrapper, CardContent, CardCaption } from "./Card.styled";
import tw from "twin.macro";

interface CardProps {
  project: IProject;
  linkType?: ICardLinkType;
  withShadow?: boolean;
  withDescription?: boolean;
}

export function Card({
  project,
  linkType = ICardLinkType.CENTER,
  withShadow,
  withDescription,
}: CardProps) {
  const styles = {
    center: {
      link: tw`border-solid border-2 border-white h-full w-full z-50 hover:animate-border-scale flex justify-center items-center flex-col opacity-0`,
      text: tw`bg-white bg-opacity-80 text-blue-dark px-1 py-0 h-12 w-14 flex justify-center items-center text-lg`,
    },
    bottom: {
      link: tw`opacity-0 hover:opacity-80 w-full h-full flex flex-col justify-end`,
      text: tw`text-blue-dark bg-white px-1 py-3 flex justify-center items-center text-lg`,
    },
  };

  return (
    <CardWrapper
      withShadow={withShadow}
      className={withShadow ? "with-shadow" : ""}
      data-testid="card"
    >
      <CardContent image={project.image}>
        <a
          href="http://ralph.es"
          target="_blank"
          rel="noopener noreferrer"
          css={[styles[linkType].link]}
        >
          <span css={[styles[linkType].text]}>Visit</span>
        </a>
      </CardContent>
      <CardCaption>
        <h2 className="text-base pb-2 dark:animate-dark-fade-in">
          {project.name}
        </h2>
        {withDescription && project.description && (
          <p className="text-sm pb-2">{project.description}</p>
        )}
        {project.stack.map((tech) => (
          <Label key={tech} text={tech}></Label>
        ))}
      </CardCaption>
    </CardWrapper>
  );
}
