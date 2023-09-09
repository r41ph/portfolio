import { Icon } from "../../components/Icon/Icon";
import { ILabel, ILabelSize } from "../../../types/types";
import { LabelWrapper } from "./Label.styled";

/**
 * Renders a label with an optional icon and or text
 */
export const Label = ({
  text,
  icon,
  callback,
  size = ILabelSize.SM,
}: ILabel) => {
  return (
    <LabelWrapper onClick={callback} size={size}>
      {icon && <Icon type={icon} />}
      {text && text}
    </LabelWrapper>
  );
};
