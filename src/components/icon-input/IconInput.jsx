import React, { createRef } from 'react'
import './IconInput.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconInput = ({ type, icon, handleChange, error, login, disabled, width, ...props }) => {
  let textInput = createRef()

  const focusInput = () => {
    textInput.current.focus()
  }

  return login ? (
    <div className={`icon-input-container ${error}`} onClick={focusInput}>
      <FontAwesomeIcon className='icon' icon={icon} />
      <input ref={textInput} onChange={handleChange} className='input' type={type} disabled={disabled} {...props} />
    </div>
  ) : (
    <div className={`icon-input-container-normal ${error}`}  onClick={focusInput} style={ disabled ? {backgroundColor:"rgb(235,235,228)"} : {} }>
      <FontAwesomeIcon className='icon' icon={icon} />
      <input ref={textInput} onChange={handleChange} className='input' type={type} disabled={disabled} {...props} />
    </div>
  )
}

export default IconInput
