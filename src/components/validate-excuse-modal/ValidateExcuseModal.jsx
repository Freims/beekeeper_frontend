import React, { useState, useEffect } from 'react'
import './ValidateExcuseModal.scss'

import CustomButton from '../custom-button/CustomButton'

import Modal from '../modal/Modal'
import { fetchExcuse } from '../../utils/url/fetch-handler'
import { formatDate } from '../../utils/data-mapping'

const ValidateExcuseModal = ({ visible, setVisible, color = '#FECD1C', id, studentId, date }) => {
  const [excuse, setExcuse] = useState({title: "", description: "Cargando..."})

  useEffect(() => {
    async function getStudents() {
      if (visible) await fetchExcuse(id, studentId, date, setExcuse);
    }
    getStudents();
    return function cleanup(){
      setExcuse({title: "", description: "Cargando..."})
    }
  }, [visible, date, id, studentId]);



  return (
    <Modal visible={visible} setVisible={setVisible}>
      {closeModal => (
        <div className='notification-content'>
          <div className='notification-content-header'>
            <span className='notification-title'> {excuse.title}</span>
            <span className='notification-date'> {excuse.excuseDate ? formatDate(excuse.excuseDate) : ""}</span>
          </div>
          <div className='horizontal-line' />
          <div className='notification-content-body'>
            {excuse.description}
            <div className='notification-dismiss'>
              <CustomButton
                value='OK'
                color={color}
                width={'6rem'}
                onClick={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}
export default ValidateExcuseModal