import React, { useState, Fragment } from "react";
import "../create-notice-modal/CreateNoticeModal.scss";
import "./ManualAssistanceModal.scss";

import Modal from "../modal/Modal";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { manualAssistance } from "../../utils/url/post-handler";
import Loading from "../loading/Loading";
import IconInput from "../icon-input/IconInput";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";

const ManualAssistanceModal = ({
  visible,
  setVisible,
  color,
  currentUser,
  id,
}) => {
  const [intecId, setIntecId] = useState();
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    if (!isNaN(Number(event.target.value))) setIntecId(event.target.value);
    
  };

  return (
    <Fragment>
      <Loading visible={loading} />
      <Modal visible={visible} setVisible={setVisible} width="40rem">
        {(closeModal) => {
          const sendAbsence = async (event) => {
            event.preventDefault();
            setLoading(true);
            let successR = await manualAssistance(id, intecId);
            if (successR) {
              closeModal();
            }
            setLoading(false);
          };
          return (
            <form onSubmit={sendAbsence} className="create-notice-container">
              <div className="professor-absence-header">
                <span>Validar Asistencia de Estudiante</span>
              </div>
              <div className="horizontal-line" />
              <div className="professor-absence-container input-intec-id">
                <IconInput
                  icon={faIdBadge}
                  type="text"
                  minLength="7"
                  maxLength="7"
                  value={intecId}
                  onChange={handleChange}
                  required
                />
                <div className="professor-absence-send input-intec-id-send">
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
export default connect(mapStateToProps)(ManualAssistanceModal);
