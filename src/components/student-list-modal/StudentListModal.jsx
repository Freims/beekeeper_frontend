import React, { useState, useEffect, Fragment } from 'react'
import './StudentListModal.scss'

import Modal from '../modal/Modal'
import CustomButton from '../custom-button/CustomButton'
import { fetchStudents } from '../../utils/url/fetch-handler'
import ValidateExcuseModal from '../validate-excuse-modal/ValidateExcuseModal'

const StudentListModal = ({ visible, setVisible, color, id }) => {
  let todayDate = new Date().toISOString().substr(0, 10)
  let today = new Date()
  today =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const [students, setStudents] = useState()
  const [currentStudentId, setCurrentStudentId] = useState()
  const [selectDate, setSelectDate] = useState(todayDate)
  const [excuseModal, setExcuseModal] = useState(false)

  const getStudents = async event => {
    console.log(event.target.value)
    let date = event.target.value
    if (date) {
      setSelectDate(date)
      setStudents(null)
      await fetchStudents(id, date, setStudents)
    }
  }

  useEffect(() => {
    async function getStudents () {
      if (visible) await fetchStudents(id, today, setStudents)
    }
    getStudents()
    return function cleanup () {
      setSelectDate(todayDate)
    }
  }, [id, today, visible, todayDate])

  return (
    <Fragment>
      <Modal visible={visible} setVisible={setVisible}>
        {closeModal => {
          return (
            <div className='student-list-container'>
              <input
                className='student-list-datepicker'
                type='date'
                max={todayDate}
                defaultValue={selectDate}
                onChange={getStudents}
              />
              <table className='student-list'>
                <thead>
                  <tr className='header-row'>
                    <th>Estudiante</th>
                    <th>ID</th>
                    <th>Asistencia</th>
                    <th>Excusa</th>
                  </tr>
                </thead>
                <tbody className='student-list-body'>
                  {students ? (
                    students.map(student => (
                      <tr key={student.studentId}>
                        <td>{student.student}</td>
                        <td>{student.id}</td>
                        {student.wasPresent === 'Y' ? (
                          <td>&#10004;</td>
                        ) : (
                          <td>X</td>
                        )}
                        {student.hasExcuse === 'N' ? (
                          <td>-</td>
                        ) : (
                          <td>
                            <CustomButton
                              color={color}
                              text='Ver'
                              width='auto'
                              onClick={() => {
                                setCurrentStudentId(student.studentId)
                                setExcuseModal(true)
                              }}
                            />
                          </td>
                        )}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan='4' height='150px'>
                        Cargando...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )
        }}
      </Modal>
      <ValidateExcuseModal
        visible={excuseModal}
        setVisible={setExcuseModal}
        id={id}
        studentId={currentStudentId}
        date={selectDate}
      />
    </Fragment>
  )
}

export default StudentListModal
