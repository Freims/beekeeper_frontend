import React, { useState, useEffect } from "react";
import "./Modal.scss";

const Modal = ({ visible, setVisible, children }) => {
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
        <div onClick={e => e.stopPropagation()} className="modal-content">
          {children(closeModal)}
        </div>
      </div>
    )
  );
};

export default Modal;
