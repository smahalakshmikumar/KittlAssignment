import { CSSProperties } from "react";

export const commonButtonStyle: CSSProperties = {
  textAlign: "center",
  fontSize: "12px",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  fontWeight: "500",
  fontFamily: "sans-serif",
  height:"30px"
};

export const disabledButtonStyle = {
  ...commonButtonStyle,
  color: "#979797",
  backgroundColor: "#E2E2E2",
};

export const idleButtonStyle = {
  ...commonButtonStyle,
  color: "#ffffff",
  backgroundColor: "#BA985D",
};

export const hoverButtonStyle = {
  ...commonButtonStyle,
  color: "#ffffff",
  backgroundColor: "#D4B57F",
};

export const secondaryButtonStyle = {
  ...commonButtonStyle,
  border: "1px solid #979797",
};

export const secondaryDisabledButtonStyle = {
  ...disabledButtonStyle,
  ...commonButtonStyle,
  border: "1px solid #979797",
};

export const secondaryIdleButtonStyle = {
  ...commonButtonStyle,
  border: "1px solid #BA985D",
  color: "#BA985D",
  backgroundColor: "#FFFFFF",
};

export const secondaryHoverButtonStyle = {
  ...commonButtonStyle,
  border: "1px solid #BA985D",
  color: "#BA985D",
  backgroundColor: "#FBF4E8",
};
