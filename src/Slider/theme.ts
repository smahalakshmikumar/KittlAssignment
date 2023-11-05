// styles.ts

export type SliderStyles = {
    [key: string]: string; // Allow any CSS property
  };
  
  export const sliderStyles: SliderStyles = {
    WebkitAppearance: "none",
    width: "100%",
    height: "15px",
    background: "#d3d3d3",
    outline: "none",
    opacity: "0.7", // Note: Wrap opacity value in quotes
    transition: "opacity 0.2s",
  };
  
  export const container = {
    width: "300px",
    margin: "20px",
  };
  
  export const sliderThumb = {
    WebkitAppearance: "none",
    width: "25px",
    height: "25px",
    background: "#4CAF50",
    cursor: "pointer",
  };
  