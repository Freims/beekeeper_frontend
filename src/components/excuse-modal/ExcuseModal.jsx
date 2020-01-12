import React, { useState, Fragment } from "react";
import "./ExcuseModal.scss";

import Modal from "../modal/Modal";
import CustomButton from "../custom-button/CustomButton";
import { connectionError, successfulExcuse } from "../../utils/notifications/notifications";
import { connect } from "react-redux";
import { createExcuse } from "../../utils/url/post-handler";
import Loading from "../loading/Loading";

const ExcuseModal = ({ visible, setVisible, color, currentUser, id }) => {
  const [excuse, setExcuse] = useState({ title: "", body: "", date:""});
  const [loading, setLoading] = useState(false);
  let todayDate = new Date().toISOString().substr(0, 10)

  const handleChange = event => {
    const { value, name } = event.target;
    setExcuse({ ...excuse, [name]: value });
  };

  return (
    <Fragment>
      <Loading visible={loading} />
      <Modal visible={visible} setVisible={setVisible}>
        {closeModal => {

          const handleSubmit = async event => {
            event.preventDefault();
            sendExcuse()
          }

          const sendExcuse = async () => {
            setLoading(true);
            let success = await createExcuse(
              currentUser.dbId,
              id,
              excuse
            );
            if (success) {
              successfulExcuse();
              closeModal();
            } else {
              connectionError();
            }
            setLoading(false);
          };
          return (
            <form onSubmit={handleSubmit} className="excuse-container">
              <div className="excuse-content-header">
                <input
                  onChange={handleChange}
                  name="title"
                  className="excuse-title"
                  maxLength="55"
                  minLength="5"
                  type="text"
                  placeholder="Título"
                  required
                />
                <input
                className='student-list-datepicker'
                name="date"
                type='date'
                min={todayDate}
                defaultValue={todayDate}
                onChange={handleChange}
              />
              </div>
              <div className="horizontal-line" />
              <div className="excuse-content-body">
                <textarea
                  onChange={handleChange}
                  name="body"
                  className="excuse-body"
                  placeholder="Describe tu excusa aquí"
                  minLength="10"
                  maxLength="255"
                  required
                />
                <div className="send-excuse">
                  <CustomButton value="Adjunto" color={color} width={"auto"} />
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

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(ExcuseModal);
