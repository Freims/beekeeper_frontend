import React, { useState, useEffect, Fragment } from "react";
import "./StudentListModal.scss";

import Modal from "../modal/Modal";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { fetchStudents } from "../../utils/url/fetch-handler";

const StudentListModal = ({ visible, setVisible, color, currentUser, id }) => {
  let todayDate = new Date().toISOString().substr(0, 10);
  let today = new Date();
  today =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [students, setStudents] = useState();

  const getStudents = async (event) => {
    console.log(event.target.value)
    let date = event.target.value;
    setStudents(null)
    await fetchStudents(id, date, setStudents)
  }

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
                defaultValue={todayDate}
                onChange={getStudents}
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
                <tbody class="student-list-body">
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
                          {student.hasExcuse === "N" ? (
                            <td>-</td>
                          ) : (
                            <td>
                              <CustomButton
                                color={color}
                                text="Ver"
                                width="auto"
                              />
                            </td>
                          )}
                        </tr>
                      ))
                    : <td colSpan="4" height="150px">Cargando...</td>}
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
