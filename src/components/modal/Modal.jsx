import React, { useState, useEffect } from 'react'
import './Modal.scss'

const Modal = ({ visible, setVisible, content }) => {
  useEffect(() => {}, [])

  const [exiting, setExiting] = useState(false)
  const closeModal = () => {
    setExiting(true)
    setTimeout(() => {
      setVisible(false)
      setExiting(false)
    }, 300)
  }

  return (
    <div
      className={`modal ${exiting ? 'goOut' : ''}`}
      onClick={closeModal}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <div onClick={e => e.stopPropagation()} className='modal-content'>
        {content}
      </div>
    </div>
  )
}

export default Modal
