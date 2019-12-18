import React, { useState } from 'react'
import './LoginCard.scss'
import ReactNotification from 'react-notifications-component'
import { ReactComponent as Logo } from '../../assets/svgs/beekeeper_logo.svg'
import CustomButton from '../custom-button/CustomButton'
import IconInput from '../icon-input/IconInput'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { handleLoginResponse } from '../../utils/response-handler'

import Loading from '../loading/Loading'

import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/user/user-actions'

const LoginCard = ({ setCurrentUser, loginSuccess }) => {
  const [userCredentials, setUserCredentials] = useState({
    id: '',
    password: ''
  })
  const [invalidCredentials, setInvalidCredentials] = useState('')
  const [loading, setLoading] = useState(false)
  const { id, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()
    await doLogin().then(response =>
      handleLoginResponse(response, setCurrentUser, loginSuccess, setInvalidCredentials, setLoading)
    )
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
        <Loading visible={loading} />
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
            maxLength="7"
            minLength="7"
            login
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
            minLength="4"
            error={invalidCredentials}
            login
          />
          <label className='label'>Contraseña</label>
        </div>
        <CustomButton login type='submit' text='ACCEDER' width='65%' />
      </form>
      <ReactNotification />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginCard)
