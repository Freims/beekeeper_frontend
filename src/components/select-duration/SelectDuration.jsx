import React, { Fragment, useState } from 'react'
import './SelectDuration.scss'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SelectDuration ({
  visible,
  setVisible,
  duration,
  setDuration
}) {
  const [exiting, setExiting] = useState(false)

  const toggle = () => {
    !visible ? setVisible(true) : setExiting(true)
  }

  const closeForReal = () => {
    if (exiting) {
      setExiting(false)
      setVisible(false)
    }
  }

  const handleChange = event => {
      const { value, name } = event.target
    if (isNaN(Number(event.target.value))) {
      return
    } else {
        if(name === "minutes" && value > 59) return
        if(name === "hours" && value > 1) return
        setDuration({ ...duration, [name]: value })
    }

  }

  return (
    <Fragment>
      <div className='select-duration-container' onAnimationEnd={closeForReal}>
        <span>
          <FontAwesomeIcon icon={faStopwatch} onClick={toggle} />
        </span>
        {visible && (
          <div className={`select-duration-body ${exiting && 'goOutSelect'}`}>
            <input
              className='select-duration-picker 1'
              type='text'
              maxLength='1'
              minLength='1'
              name='hours'
              onChange={handleChange}
              value={duration.hours}
              defaultValue={duration.hours}
            ></input>
            <span className='select-duration-picker-label-1'>h</span>
            <input
              className='select-duration-picker select-duration-picker-2'
              type='text'
              name='minutes'
              onChange={handleChange}
              maxLength='2'
              minLength='1'
              value={duration.minutes}
              defaultValue={duration.minutes}
            ></input>{' '}
            <span className='select-duration-picker-label-2'>m</span>
          </div>
        )}
      </div>
    </Fragment>
  )
}
