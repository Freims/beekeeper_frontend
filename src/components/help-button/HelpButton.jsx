import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "./HelpButton.scss";

import { NavLink } from "react-router-dom";

const HelpButton = () => {
  return (
    <NavLink to="/help/start" className="sign-out-button">
      <FontAwesomeIcon icon={faQuestionCircle} />
    </NavLink>
  );
};

export default HelpButton;
