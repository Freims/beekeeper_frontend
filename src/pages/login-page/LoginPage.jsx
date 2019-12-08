import React from 'react'
import './LoginPage.scss'
import LoginCard from '../../components/login-card/LoginCard'
import { withRouter } from 'react-router-dom'

const LoginPage = ({ history }) => {
  const redirectToHomepage = () => {
    history.push('/')
  }

  return (
    <div className='login-page'>
      <LoginCard loginSuccess={redirectToHomepage} />
    </div>
  )
}

export default withRouter(LoginPage)
