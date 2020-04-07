import React, { useState, Fragment } from "react";
import "../create-notice-modal/CreateNoticeModal.scss";
import "./ProfessorAbsenceModal.scss";

import Modal from "../modal/Modal";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { createAbsence } from "../../utils/url/post-handler";
import Loading from "../loading/Loading";

const ProfessorAbsenceModal = ({
  visible,
  setVisible,
  color,
  currentUser,
  id
}) => {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [loading, setLoading] = useState(false);
  const handleChange = event => {
    setDate(event.target.value);
  };

  return (
    <Fragment>
      <Loading visible={loading} />
      <Modal visible={visible} setVisible={setVisible} width="40rem">
        {closeModal => {
          const sendAbsence = async event => {
            event.preventDefault();
            setLoading(true);
            await createAbsence(
              date,
              currentUser.dbId,
              id,
              "Notificación de Ausencia",
              `La clase pautada para el ${date} ha sido cancelada.`
            );
            setLoading(false);
            closeModal();
          };
          return (
            <form onSubmit={sendAbsence} className="create-notice-container">
              <div className="professor-absence-header">
                <span>Notificar Ausencia</span>
              </div>
              <div className="horizontal-line" />
              <div className="professor-absence-container">
                <input
                  className="professor-absence-datepicker"
                  type="date"
                  min={date}
                  value={date}
                  onChange={handleChange}
                />
                <div className="professor-absence-send">
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
export default connect(mapStateToProps)(ProfessorAbsenceModal);
