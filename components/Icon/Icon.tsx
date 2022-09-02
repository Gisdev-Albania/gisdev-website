import React, { Suspense } from "react";
import styles from "../../styles/components/Icon.module.scss";

export enum IconType {
  Fill = "Fill",
  Line = "Line",
  Editor = "",
}

export enum IconSize {
  ExtraSmall,
  Small,
  Medium,
}

export interface IconProps {
  icon: string;
  type?: IconType;
  className?: string;
  size?: IconSize;
  spin?: boolean;
}

const Icon = React.memo<IconProps>(
  ({
    icon,
    type = IconType.Fill,
    size = IconSize.Small,
    className = "",
    spin = false,
  }: IconProps) => {
    const Icon = React.lazy(() => import(`remixicon-react/${icon}${type}Icon`));
    const iconSize = {
      [IconSize.ExtraSmall]: 16,
      [IconSize.Small]: 24,
      [IconSize.Medium]: 34,
    };
    const iconClassNames =
      (styles.icon, className, spin ? styles.animation : "");

    return (
      <>
        <Icon
          size={iconSize[size]}
          className={iconClassNames}
          color={"currentColor"}
        />
      </>
    );
  }
);

Icon.displayName = "Icon";
export default Icon;
