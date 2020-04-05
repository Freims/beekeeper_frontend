import React from "react";
import "../help-page/HelpPage.scss";
import Collapsible from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CollapsibleQuestion = ({ title, description }) => {
  return (
    <Collapsible
      trigger={
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {title} <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
        </div>
      }
    >
      {description}
    </Collapsible>
  );
};

export default CollapsibleQuestion;
