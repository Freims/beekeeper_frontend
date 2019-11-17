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

  const { id, password } = userCredentials

  const handleSubmit = event => {
    event.preventDefault()
    props.history.push('/')
  }

  const handleChange = event => {
    const { value, name } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
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
          />
          <label className='label'>Contraseña</label>
        </div>
        <CustomButton type='submit' text='ACCEDER' width='65%' />
      </form>
    </div>
  )
}
export default LoginCard
