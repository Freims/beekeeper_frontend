import React, { useState } from 'react'
import './LoginCard.scss'
import ReactNotification from 'react-notifications-component'
import { ReactComponent as Logo } from '../../assets/svgs/beekeeper_logo.svg'
import CustomButton from '../custom-button/CustomButton'
import IconInput from '../icon-input/IconInput'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

import { InvalidCredentials, ConnectionError } from '../../utils/notifications'
import Loading from '../loading/Loading'

const LoginCard = props => {
  const [userCredentials, setUserCredentials] = useState({
    id: '',
    password: ''
  })
  const [invalidCredentials, setInvalidCredentials] = useState('')
  const [loading, setLoading] = useState(false)
  const { id, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()
    let response = await doLogin()
    if (response) {
      if (response.success) {
        props.setUser(response.resultData.studentId, 'student')
        localStorage.setItem('id', id)
        let resultData = response.resultData
        props.history.push('/')
        console.log(response.resultData.studentId)
        props.setUserDetails({
          id: resultData.intecStudentId,
          firstName: resultData.firstName,
          lastName: resultData.lastName,
          program: 'Ingeniería de Software'
        })
      } else {
        setInvalidCredentials('error')
        InvalidCredentials()
        setLoading(false)
      }
    } else {
      ConnectionError()
    }
  }

  const handleChange = event => {
    const { value, name } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const doLogin = async () => {
    setLoading(true)
    try {
      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/Login/${id}/${password}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )
      let responseJson = await response.json()
      return responseJson
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
    setLoading(false)
  }

  return (
    <div className='login-card'>
      <div className='loader'>
        <Loading hidden={loading} />
      </div>
      <div className='logo-container'>
        <Logo />
      </div>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='label-input'>
          <IconInput
            name='id'
            value={id}
            handleChange={handleChange}
            type='text'
            icon={faUser}
            error={invalidCredentials}
            required
          />
          <label className='label'>ID</label>
        </div>
        <div className='label-input label-input-last'>
          <IconInput
            name='password'
            value={password}
            handleChange={handleChange}
            type='password'
            icon={faKey}
            required
            error={invalidCredentials}
          />
          <label className='label'>Contraseña</label>
        </div>
        <CustomButton type='submit' text='ACCEDER' width='65%' />
      </form>
      <ReactNotification />
    </div>
  )
}
export default LoginCard
