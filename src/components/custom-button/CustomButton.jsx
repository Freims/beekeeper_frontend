import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  color = "#FECD1C",
  text,
  width = "100%",
  type = "button",
  ...props
}) => (
  <input
    type={type}
    className="custom-button"
    style={{ backgroundColor: `${color}`, width: `${width}` }}
    value={text}
    {...props}
  ></input>
);

export default CustomButton;
