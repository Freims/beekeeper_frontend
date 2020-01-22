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
import { fetchClassDetails, fetchClasses } from '../../utils/url/fetch-handler'
import ExcuseModal from '../../components/excuse-modal/ExcuseModal'
import { sendAssistanceCode, generateToken } from '../../utils/url/post-handler'
import StudentListModal from '../../components/student-list-modal/StudentListModal'
import CreateNoticeModal from '../../components/create-notice-modal/CreateNoticeModal'
import ProfessorAbsenceModal from '../../components/professor-absence-modal/ProfessorAbsenceModal'
import ManualAssistanceModal from '../../components/manual-assistance-modal/ManualAssistanceModal'
import SelectDuration from '../../components/select-duration/SelectDuration'
import Counter from 'react-omni-counter'
import { setCurrentClasses } from '../../redux/classes/classes-actions'

const ClassPage = ({ currentClasses, currentUser, setCurrentClasses, history }) => {
  const { courseName } = useParams()
  const [currentClass, setCurrentClass] = useState({ noticesList: [] })
  const [classHead, setClassHead] = useState({})
  const [color, setColor] = useState('white')
  const [createExcuse, setCreateExcuse] = useState(false)
  const [absence, setAbsence] = useState(false)
  const [createNotice, setCreateNotice] = useState(false)
  const [studentListModal, setStudentListModal] = useState(false)
  const [manualAssistance, setManualAssistance] = useState(false)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState('')
  const [durationSelect, setDurationSelect] = useState('')
  const [duration, setDuration] = useState({ hours: 0, minutes: 30 })
  let isProfessor = currentUser.role === 'Professor'

  const handleChange = event => {
    const { value } = event.target
    setToken(value)
  }

  const generateNewToken = async () => {
    setLoading(true)
    let token = await generateToken(
      classHead.sectionId,
      `${duration.hours ? duration.hours : 0}:${
        duration.minutes ? duration.minutes : 0
      }:00`
    )
    setToken(token)
    setLoading(false)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    let success = await sendAssistanceCode(currentClass.sectionId, currentUser.dbId, token)
    success && fetchClasses(currentUser.dbId, setCurrentClasses);
    setLoading(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      let searchedClass = await currentClasses.find(
        cour => cour.course === courseName
      )
      if (searchedClass === undefined) {
        history.push('/')
        return null
      }
      setClassHead(searchedClass)
      await fetchClassDetails(setCurrentClass, searchedClass.sectionId)
      setLoading(false)
      setColor(generateColor(`${searchedClass.course}jaja`))
      let root = document.documentElement
      root.style.setProperty(
        '--scroll-color',
        generateColor(`${searchedClass.course}jaja`)
      )
    }

    fetchData()
  }, [currentClasses, courseName, history])

  return (
    <div className='class-page'>
      <div className='class-title'>
        <span className='title'>
          {currentClass.course ? currentClass.course : 'Cargando. . .'}
        </span>
      </div>
      <div className='class-page-content'>
        <div className='class-content'>
          <div className='class-item'>
            <span className='class-item-subtitle'>Ausencias</span>
            <div className='class-divider' />
            {isProfessor ? (
              <div className='class-absence'>
                <CustomButton
                  color={color}
                  width='auto'
                  text='Notificar Ausencia'
                  onClick={() => setAbsence(true)}
                />
                {/* <CustomButton
                  color={color}
                  width='auto'
                  text='Agendar Reposición'
                /> */}
              </div>
            ) : (
              <StyledFraction
                color={color}
                numerator={classHead.absences}
                denominator={currentClass.credits}
              />
            )}
          </div>
          <div className='class-item'>
            <span className='class-item-subtitle'>Avisos</span>
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
            {isProfessor ? (
              <div className='create-notice-button'>
                <CustomButton
                  color={color}
                  width='auto'
                  text='Crear Aviso'
                  onClick={() => setCreateNotice(true)}
                />
              </div>
            ) : null}
          </div>
        </div>
        {isProfessor ? (
          <div className='class-content'>
            <div className='class-item'>
              <span className='class-item-subtitle'>Código de Asistencia</span>
              <div className='class-divider' />
              <div className='class-absence'>
                <input
                  className='class-item-token-input'
                  disabled
                  maxLength='6'
                  value={token || currentClass.tokenKey || ''}
                />
                {(token || currentClass.tokenKey) && (
                  <div className='class-item-token-counter'>
                    <Counter
                      mode='hh:mm:ss'
                      to={ Number(currentClass.leftSeconds) === 0 ?
                         new Date(Date.now() + duration.hours * 3600000 + duration.minutes * 60000)
                          : 
                          new Date(Date.now() + currentClass.leftSeconds * 1000)
                      }/>
                  </div>
                )}
                <div className='class-item-token-generate'>
                  <SelectDuration
                    duration={duration}
                    setDuration={setDuration}
                    visible={durationSelect}
                    setVisible={setDurationSelect}
                  />
                  <CustomButton
                    color={color}
                    width='16rem'
                    text='Generar Código'
                    onClick={generateNewToken}
                    disabled={!!token || !!currentClass.tokenKey}
                  />
                </div>
              </div>
            </div>
            <div className='class-item'>
              <span className='class-item-subtitle'>Asistencia Manual</span>
              <div className='class-divider' />
              <div className='class-absence'>
                <CustomButton
                  color={color}
                  width='97%'
                  text='Ver Registro'
                  onClick={() => {
                    setStudentListModal(true)
                    console.log('hi')
                  }}
                />
                <CustomButton
                  color={color}
                  width='auto'
                  text='Validar ID'
                  onClick={() => setManualAssistance(true)}
                />
              </div>
            </div>

            <StudentListModal
              visible={studentListModal}
              setVisible={setStudentListModal}
              color={color}
              id={classHead.sectionId}
            />
            <CreateNoticeModal
              visible={createNotice}
              setVisible={setCreateNotice}
              color={color}
              id={classHead.sectionId}
            />
            <ProfessorAbsenceModal
              visible={absence}
              setVisible={setAbsence}
              color={color}
              id={classHead.sectionId}
            />
            <ManualAssistanceModal
              visible={manualAssistance}
              setVisible={setManualAssistance}
              color={color}
              id={classHead.sectionId}
            />
          </div>
        ) : (
          <React.Fragment>
            <form className='single-class-item' onSubmit={handleSubmit}>
              <span className='class-item-subtitle'>Asistencia</span>
              <div className='class-divider' />
              <div className='class-code-container'>
                <IconInput
                  spellCheck='false'
                  maxLength={6}
                  required
                  minLength={6}
                  onChange={handleChange}
                  icon={faCopy}
                  pattern='[A-Za-z0-9]{1,20}'
                />
                {
                }
                {!!Number(currentClass.leftSeconds) && (
                  <div className='counter-student'>
                    <Counter mode='hh:mm:ss'
                      to={(new Date(Date.now() + Number(currentClass.leftSeconds) * 1000))}
                    />
                  </div>
                )}
              </div>
              <div className='class-buttons'>
                <CustomButton
                  color={color}
                  width='auto'
                  text='Enviar código'
                  type='submit'
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
            </form>
          </React.Fragment>
        )}
        <Loading visible={loading} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ classes, user }) => ({
  currentClasses: classes.currentClasses,
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentClasses: classes => dispatch(setCurrentClasses(classes))
});


export default connect(mapStateToProps, mapDispatchToProps)(ClassPage)
