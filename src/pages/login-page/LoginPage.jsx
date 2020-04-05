import React from 'react'
import './LoginPage.scss'
import LoginCard from '../../components/login-card/LoginCard'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const LoginPage = ({ history }) => {
  const redirectToHomepage = () => {
    history.push('/')
  }

  return (
    <div className='login-page'>
      <LoginCard loginSuccess={redirectToHomepage} />
      <button className="help-guide-button" onClick={() => history.push("help/start")}>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </button>
    </div>
  )
}

export default withRouter(LoginPage)
