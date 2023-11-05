import React from "react";
import "./button.css";
import {
  disabledButtonStyle,
  hoverButtonStyle,
  idleButtonStyle,
  secondaryDisabledButtonStyle,
  secondaryHoverButtonStyle,
  secondaryIdleButtonStyle,
} from "./theme";
import { ButtonBaseProps } from "./types";
import { DisabledRightArrowIcon } from "./icons/disabledRightArrow";
import { SecondaryIdleRightArrowIcon } from "./icons/secondaryIdleRightArrow";
import { DisabledLeftArrowIcon } from "./icons/disabledLeftArrow";
import { IdleLeftArrowIcon } from "./icons/idleLeftArrow";
import { SecondaryIdleLeftArrowIcon } from "./icons/secondaryIdleLeftArrow";
import { IdleRightArrowIcon } from "./icons/idleRightArrow";
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonBaseProps> = ({
  label,
  isDisabled,
  variant,
  isRightIcon,
  isLeftIcon,
  ...props
}) => {
  const [hover, setHover] = React.useState(false);
  const isPrimary = variant === "primary";
  const isIdleLeftIcon= isLeftIcon && !isDisabled;
  const isIdleRightIcon = isRightIcon && !isDisabled;
  //styles based on disabled/idle/hover
  const styles = isDisabled
    ? isPrimary
      ? disabledButtonStyle
      : secondaryDisabledButtonStyle
    : hover
    ? isPrimary
      ? hoverButtonStyle
      : secondaryHoverButtonStyle
    : isPrimary
    ? idleButtonStyle
    : secondaryIdleButtonStyle;

  return (
    <>
      <button
        type="button"
        style={styles}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        {...props}
      >
        {isLeftIcon && isDisabled ? (
          <DisabledLeftArrowIcon />
        ) : isIdleLeftIcon && isPrimary ? (
          <IdleLeftArrowIcon />
        ) : isIdleLeftIcon && !isPrimary ? (
          <SecondaryIdleLeftArrowIcon />
        ) : null}
        {label}
        {isRightIcon && isDisabled ? (
          <DisabledRightArrowIcon />
        ) : isIdleRightIcon && isPrimary ? (
          <IdleRightArrowIcon />
        ) : isIdleRightIcon && !isPrimary ? (
          <SecondaryIdleRightArrowIcon />
        ) : null}
      </button>
    </>
  );
};
