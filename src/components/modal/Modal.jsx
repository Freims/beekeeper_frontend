import React, { useState, useEffect } from "react";
import "./Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ visible, setVisible, children, width }) => {
  useEffect(() => {}, [visible]);

  const [exiting, setExiting] = useState(false);

  const closeModal = () => {
    setExiting(true);
  };

  const closeModalForReal = () => {
    console.log("closing for realsies");
    if (exiting) {
      setExiting(false);
      setVisible(false);
    }
  };

  return (
    visible && (
      <div
        className={`modal ${exiting && "goOut"}`}
        onAnimationEnd={closeModalForReal}
        onClick={closeModal}
      >
        <div  
          onClick={e => e.stopPropagation()}
          className="modal-content"
          style={(width = { width })}>
          <div className="modal-content-close-icon" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
          </div>
          {children && children(closeModal)}
        </div>
      </div>
    )
  );
};

export default Modal;
