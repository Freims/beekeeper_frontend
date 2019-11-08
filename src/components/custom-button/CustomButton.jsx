import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ color = "#FECD1C", text, width = "100%" }) => (
  <span
    className="custom-button"
    style={{ backgroundColor: `${color}`, width: `${width}` }}
  >
    {text}
  </span>
);

export default CustomButton;
