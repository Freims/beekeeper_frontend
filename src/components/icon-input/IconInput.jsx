import React from "react";
import "./IconInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconInput = ({ type, icon, placeholder }) => {
  let textInput = null;

  const focusText = () => {
    textInput.focus();
  };

  return (
    <div className="icon-input-container" onClick={focusText}>
      <FontAwesomeIcon className="icon" icon={icon} />
      <input
        ref={input => {
          textInput = input;
        }}
        className="input"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default IconInput;
