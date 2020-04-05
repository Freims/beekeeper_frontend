import React, { useState } from "react";
import "../help-page/HelpPage.scss";
import Collapsible from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CollapsibleQuestion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible
      onOpening={() => setIsOpen(true)}
      onClosing={() => setIsOpen(false)}
      trigger={
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {title}
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp}> </FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          )}
        </div>
      }
    >
      {description}
    </Collapsible>
  );
};

export default CollapsibleQuestion;
