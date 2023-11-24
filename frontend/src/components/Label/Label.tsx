import { Icon } from "../Icon/Icon";
import { Label as ILabel, LabelSize } from "../../../types/types";
import { LabelWrapper } from "./Label.styled";

export const Label = ({
  text,
  icon,
  callback,
  size = LabelSize.SM,
}: ILabel) => {
  return (
    <LabelWrapper onClick={callback} size={size}>
      {icon && <Icon type={icon} />}
      {text && text}
    </LabelWrapper>
  );
};
