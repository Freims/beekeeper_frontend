import React, { useState } from 'react'
import './LoginCard.scss'

import { ReactComponent as Logo } from '../../assets/svgs/beekeeper_logo.svg'
import CustomButton from '../custom-button/CustomButton'
import IconInput from '../icon-input/IconInput'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

const LoginCard = props => {
  const [userCredentials, setUserCredentials] = useState({
    id: '',
    password: ''
  })
  const [invalidCredentials, setInvalidCredentials] = useState('')
  const { id, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()
    let response = await doLogin()
    if (response.success) {
      props.setUser(response.resultData.studentId, 'student')
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
      alert('Credenciales inválidas.')
      setInvalidCredentials('error')
    }
  }

  const handleChange = event => {
    const { value, name } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const doLogin = async () => {
    try {
      console.log(id)

      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://beekeeperrestapi20191118113312.azurewebsites.net/Login/${id}/${password}`,
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
    }
  }

  return (
    <div className='login-card'>
      <div className='logo-container'>
        <Logo />
      </div>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='label-input'>
          <IconInput name='id' value={id} handleChange={handleChange} type='text' icon={faUser} required />
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
      <button onClick={doLogin}>dologin</button>
    </div>
  )
}
export default LoginCard
