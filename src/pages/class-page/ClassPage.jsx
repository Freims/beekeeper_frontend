import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './ClassPage.scss'

import StyledFraction from '../../components/styled-fraction/StyledFraction'
import NotificationPill from '../../components/notification-pill/NotificationPill'
import IconInput from '../../components/icon-input/IconInput'
import CustomButton from '../../components/custom-button/CustomButton'
import Loading from '../../components/loading/Loading'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import { useParams } from 'react-router-dom'
import generateColor from '../../utils/color-from-string'
import { fetchClassDetails } from '../../utils/url/fetch-handler'
import ExcuseModal from '../../components/excuse-modal/ExcuseModal'
import { sendAssistanceCode } from '../../utils/url/post-handler'

const ClassPage = ({ currentClasses, currentUser }) => {
  const { courseName } = useParams()
  const [currentClass, setCurrentClass] = useState({ noticesList: [] })
  const [classHead, setClassHead] = useState({})
  const [color, setColor] = useState('white')
  const [createExcuse, setCreateExcuse] = useState(false)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState()

  const handleChange = event => {
    const { value } = event.target
    setToken(value)
  }

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
            <IconInput
              spellCheck='false'
              maxLength={10}
              required
              minLength={10}
              onChange={handleChange}
              icon={faCopy}
              pattern='[A-Za-z0-9]{1,20}'
            />
          </div>
          <div className='class-buttons'>
            <CustomButton
              color={color}
              width='auto'
              text='Enviar código'
              onClick={() =>
                sendAssistanceCode(
                  currentClass.sectionId,
                  currentUser.dbId,
                  token
                )
              }
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
      </div>
    </div>
  )
}

const mapStateToProps = ({ classes, user }) => ({
  currentClasses: classes.currentClasses,
  currentUser: user.currentUser
})

export default connect(mapStateToProps)(ClassPage)
