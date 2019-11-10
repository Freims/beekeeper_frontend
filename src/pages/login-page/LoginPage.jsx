import React from 'react'
import './LoginPage.scss'
import LoginCard from '../../components/login-card/LoginCard'

const LoginPage = props => (
  <div className='login-page'>
    <LoginCard {...props} />
  </div>
)

export default LoginPage
