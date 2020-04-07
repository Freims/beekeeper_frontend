import React, { useState, Fragment } from "react";
import "./CreateNoticeModal.scss";

import Modal from "../modal/Modal";
import CustomButton from "../custom-button/CustomButton";
import {
  connectionError,
  success,
} from "../../utils/notifications/notifications";
import { connect } from "react-redux";
import { createNotice } from "../../utils/url/post-handler";
import Loading from "../loading/Loading";

const CreateNoticeModal = ({
  visible,
  setVisible,
  color,
  currentUser,
  id,
  refresh,
}) => {
  const [notice, setNotice] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNotice({ ...notice, [name]: value });
  };

  return (
    <Fragment>
      <Loading visible={loading} />
      <Modal visible={visible} setVisible={setVisible}>
        {(closeModal) => {
          const handleSubmit = async (event) => {
            event.preventDefault();
            sendExcuse();
          };

          const sendExcuse = async () => {
            setLoading(true);
            let successR = await createNotice(
              currentUser.dbId,
              id,
              notice.title,
              notice.body
            );
            if (successR) {
              success(successR);
              closeModal();
              refresh();
            } else {
              connectionError();
            }
            setLoading(false);
          };
          return (
            <form onSubmit={handleSubmit} className="create-notice-container">
              <div className="create-notice-content-header">
                <input
                  onChange={handleChange}
                  name="title"
                  className="create-notice-title"
                  maxLength="55"
                  minLength="5"
                  type="text"
                  placeholder="Título del aviso"
                  required
                />
              </div>
              <div className="horizontal-line" />
              <div className="create-notice-content-body">
                <textarea
                  onChange={handleChange}
                  name="body"
                  className="create-notice-body"
                  placeholder="Describe el aviso aquí"
                  minLength="10"
                  maxLength="255"
                  required
                />
                <div className="send-notice">
                  <CustomButton
                    value="Enviar"
                    color={color}
                    width={"auto"}
                    type="submit"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(CreateNoticeModal);
