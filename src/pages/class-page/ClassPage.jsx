import React from 'react'
import './ClassPage.scss'

import StyledFraction from '../../components/styled-fraction/StyledFraction'
import NotificationPill from '../../components/notification-pill/NotificationPill'
import IconInput from '../../components/icon-input/IconInput'
import CustomButton from '../../components/custom-button/CustomButton'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import { useParams } from 'react-router-dom'
import generateColor from '../../utils/color-from-string'

const ClassPage = () => {
  const { classId } = useParams()
  let notifications = [
    {
      date: '11/02/2019',
      msg: 'hola'
    },
    {
      date: '22/02/2019',
      msg: 'hola'
    }
  ]
  let color = generateColor(classId)

  return (
    <div className='class-page'>
      <div className='class-title'>
        <span className='title'>{classId}</span>
      </div>
      <div className='class-content'>
        <div className='class-item'>
          <span>Ausencias</span>
          <div className='class-divider' />
          <StyledFraction color={color} numerator={1} denominator={2} />
        </div>
        <div className='class-item'>
          <span>Avisos</span>
          <div className='class-divider' />
          <div className='class-notification-container'>
          {notifications.map((notification, index) => (
              <NotificationPill key={index} notification={notification} color={color} />
            ))}
          </div>
        </div>
      </div>
      <div className='class-item'>
        <span>Asistencia</span>
        <div className='class-divider' />
        <div className='class-code-container'>
          <IconInput maxLength={6} icon={faCopy} />
        </div>
        <div className='class-buttons'>
          <CustomButton color={color} width='auto' text='Enviar' />
          <CustomButton color={color} width='auto' text='Crear Excusa' />
        </div>
      </div>
    </div>
  )
}

export default ClassPage
