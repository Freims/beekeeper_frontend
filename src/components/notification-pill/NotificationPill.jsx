import React, { Fragment, useState } from 'react'
import './NotificationPill.scss'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotificationPill = ({ notification }) => {
  const { date, msg } = notification
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
      <div className='notification-pill' onClick={() => setVisible(true)}>
        <span className='date'>{date}</span>
        <span className='view-more'>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
    </Fragment>
  )
}
export default NotificationPill
