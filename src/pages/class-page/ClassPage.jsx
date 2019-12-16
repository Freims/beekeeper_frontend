import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './ClassPage.scss'

import StyledFraction from '../../components/styled-fraction/StyledFraction'
import NotificationPill from '../../components/notification-pill/NotificationPill'
import IconInput from '../../components/icon-input/IconInput'
import CustomButton from '../../components/custom-button/CustomButton'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import { useParams } from 'react-router-dom'
import generateColor from '../../utils/color-from-string'
import { fetchClassDetails } from '../../utils/response-handler'

const ClassPage = ({ currentClasses }) => {
  const { courseName } = useParams()
  const [currentClass, setCurrentClass] = useState({ noticesList: [] })
  const [classHead, setClassHead] = useState({})
  const [color, setColor] = useState("white")

  useEffect(() => {
    const fetchData = async () => {
      let searchedClass = await currentClasses.find(cour => cour.course === courseName)
      fetchClassDetails(setCurrentClass, searchedClass.sectionId)
      setClassHead(searchedClass)
      setColor(generateColor(`${searchedClass.course}1`))
    }
    fetchData();
  }, [currentClasses, courseName])

  return (
    <div className='class-page'>
      <div className='class-title'>
        <span className='title'>{currentClass.course}</span>
      </div>
      <div className='class-content'>
        <div className='class-item'>
          <span>Ausencias</span>
          <div className='class-divider' />
          <StyledFraction color={color} numerator={classHead.absences} denominator={currentClass.credits} />
        </div>
        <div className='class-item'>
          <span>Avisos</span>
          <div className='class-divider' />
          <div className='class-notification-container'>
            {currentClass.noticesList.map((notification, index) => (
              <div className='notification-individual-container'>
                <NotificationPill
                  key={index}
                  notification={notification}
                  color={color}
                />
              </div>
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
          <CustomButton color={color} width='auto' text='Enviar código' />
          <CustomButton color={color} width='auto' text='Crear excusa' />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ classes }) => ({
  currentClasses: classes.currentClasses
})

export default connect(mapStateToProps)(ClassPage)
