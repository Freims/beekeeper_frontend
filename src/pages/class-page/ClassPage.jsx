import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './ClassPage.scss'

import ReactNotification from 'react-notifications-component'
import StyledFraction from '../../components/styled-fraction/StyledFraction'
import NotificationPill from '../../components/notification-pill/NotificationPill'
import IconInput from '../../components/icon-input/IconInput'
import CustomButton from '../../components/custom-button/CustomButton'
import Loading from '../../components/loading/Loading'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import { useParams } from 'react-router-dom'
import generateColor from '../../utils/color-from-string'
import { fetchClassDetails } from '../../utils/fetch-handler'
import ExcuseModal from '../../components/excuse-modal/ExcuseModal'
import { connectionError } from '../../utils/notifications'

const ClassPage = ({ currentClasses }) => {
  const { courseName } = useParams()
  const [currentClass, setCurrentClass] = useState({ noticesList: [] })
  const [classHead, setClassHead] = useState({})
  const [color, setColor] = useState('white')
  const [createExcuse, setCreateExcuse] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      let searchedClass = await currentClasses.find(
        cour => cour.course === courseName
      )
      fetchClassDetails(setCurrentClass, searchedClass.sectionId).then(
        setLoading(false)
      )
      setClassHead(searchedClass)
      setColor(generateColor(`${searchedClass.course}1`))
    }
    fetchData()
  }, [currentClasses, courseName])

  return (
    <div className='class-page'>
      <div className='class-title'>
        <span className='title'>{currentClass.course}</span>
      </div>
      <div className='class-page-content'>
        <div className='class-content'>
          <div className='class-item'>
            <span>Ausencias</span>
            <div className='class-divider' />
            <StyledFraction
              color={color}
              numerator={classHead.absences}
              denominator={currentClass.credits}
            />
          </div>
          <div className='class-item'>
            <span>Avisos</span>
            <div className='class-divider' />
            <div className='class-notification-container'>
              {currentClass.noticesList ? (
                currentClass.noticesList.map((notification, index) => (
                  <div
                    key={index}
                    className='notification-individual-container'
                  >
                    <NotificationPill
                      notification={notification}
                      color={color}
                    />
                  </div>
                ))
              ) : (
                <div className='class-no-notices'>
                  No tienes avisos pendientes.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='single-class-item'>
          <span>Asistencia</span>
          <div className='class-divider' />
          <div className='class-code-container'>
            <IconInput maxLength={6} icon={faCopy} />
          </div>
          <div className='class-buttons'>
            <CustomButton
              color={color}
              width='auto'
              text='Enviar código'
              onClick={connectionError}
            />
            <CustomButton
              color={color}
              width='auto'
              text='Crear excusa'
              onClick={() => setCreateExcuse(true)}
            />
            <ExcuseModal
              visible={createExcuse}
              setVisible={setCreateExcuse}
              color={color}
              id={classHead.sectionId}
            />
          </div>
        </div>
        <Loading visible={loading} />
        <ReactNotification />
      </div>
    </div>
  )
}

const mapStateToProps = ({ classes }) => ({
  currentClasses: classes.currentClasses
})

export default connect(mapStateToProps)(ClassPage)
