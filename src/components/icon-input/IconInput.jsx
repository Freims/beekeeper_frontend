import React, { createRef } from 'react'
import './IconInput.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconInput = ({ type, icon, handleChange, error, ...props }) => {
  let textInput = createRef()

  const focusInput = () => {
    textInput.current.focus()
  }

  return (
    <div className={`icon-input-container ${error}`} onClick={focusInput}>
      <FontAwesomeIcon className='icon' icon={icon} />
      <input ref={textInput} onChange={handleChange} className='input' type={type} {...props} />
    </div>
  )
}

export default IconInput
