import React, { useState, useEffect } from 'react'
import './Modal.scss'

const Modal = ({ visible, setVisible, children }) => {
  useEffect(() => {}, [])

  const [exiting, setExiting] = useState(false)
  const closeModal = () => {
    setExiting(true)
    setTimeout(() => {
      setExiting(false)
      setVisible(false)
    }, 300)
  }

  return (
    <div className={`modal ${exiting && 'goOut'}`} onClick={closeModal} style={{ display: visible ? 'flex' : 'none' }}>
      <div onClick={e => e.stopPropagation()} className='modal-content'>
        {children(closeModal)}
      </div>
    </div>
  )
}

export default Modal
