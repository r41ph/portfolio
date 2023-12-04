import { Icon } from "../Icon/Icon";
import { Badge as IBadge, BadgeSize } from "../../../types/types";
import { BadgeWrapper } from "./Badge.styled";

export const Badge = ({
  text,
  icon,
  callback,
  size = BadgeSize.SM,
}: IBadge) => {
  return (
    <BadgeWrapper onClick={callback} size={size}>
      {icon && <Icon type={icon} />}
      {text && text}
    </BadgeWrapper>
  );
};
