import React, { useState, useEffect, Fragment } from "react";
import "./StudentListModal.scss";

import Modal from "../modal/Modal";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { fetchStudents } from "../../utils/url/fetch-handler";

const StudentListModal = ({ visible, setVisible, color, currentUser, id }) => {
  let today = new Date();
  today =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const [students, setStudents] = useState();

  useEffect(() => {

    async function getStudents() {
      if (visible) await fetchStudents(id, today, setStudents);
    }
    getStudents();
  }, [id, today, visible]);

  return (
    <Fragment>
      <Modal visible={visible} setVisible={setVisible}>
        {closeModal => {
          return (
            <div className="student-list-container">
              <input
                className="student-list-datepicker"
                type="date"
                defaultValue={today}
              />
              <table className="student-list">
                <thead>
                  <tr className="header-row">
                    <th>Estudiante</th>
                    <th>ID</th>
                    <th>Asistencia</th>
                    <th>Excusa</th>
                  </tr>
                </thead>
                <tbody>
                  {students
                    ? students.map(student => (
                        <tr>
                          <td>{student.student}</td>
                          <td>{student.id}</td>
                          {student.wasPresent === "Y" ? (
                            <td>&#10004;</td>
                          ) : (
                            <td>X</td>
                          )}
                          {student.hasExcuse === "N" ? 
                          <td>-</td>:
                          <CustomButton color={color} text="Ver" width="auto"/>
                            }
                        </tr>
                      ))
                    : "Cargando..."}
                </tbody>
              </table>
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
export default connect(mapStateToProps)(StudentListModal);
