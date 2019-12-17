import React, { useState, Fragment } from "react";
import "./ExcuseModal.scss";
import ReactNotification from "react-notifications-component";

import Modal from "../modal/Modal";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { createExcuse } from "../../utils/post-utils";

const ExcuseModal = ({
  visible,
  setVisible,
  color,
  currentUser,
  id,
  trigger
}) => {
  const [excuse, setExcuse] = useState({ title: "", body: "" });

  const handleChange = event => {
    const { value, name } = event.target;
    setExcuse({ ...excuse, [name]: value });
  };

  return (
    <Fragment>
      <Modal visible={visible} setVisible={setVisible}>
        {closeModal => {
          const sendExcuse = async () => {
            let success = await createExcuse(
              currentUser.dbId,
              id,
              excuse.title,
              excuse.body
            );
            if (success) {
              closeModal();
            }
          };
          return (
            <div className="excuse-container">
              <div className="excuse-content-header">
                <input
                  onChange={handleChange}
                  name="title"
                  className="excuse-title"
                  maxLength="55"
                  minLength="5"
                  type="text"
                  placeholder="Título"
                />
              </div>
              <div className="horizontal-line" />
              <div className="excuse-content-body">
                <textarea
                  onChange={handleChange}
                  name="body"
                  className="excuse-body"
                  placeholder="Describe tu excusa aquí"
                />
                <div className="send-excuse">
                  <CustomButton
                    value="Adjunto"
                    color={color}
                    width={"auto"}
                    onClick={trigger()}
                  />
                  <CustomButton
                    value="Enviar"
                    color={color}
                    width={"auto"}
                    onClick={sendExcuse}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(ExcuseModal);
