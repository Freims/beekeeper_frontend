import React from 'react'
import './LoginPage.scss'
import LoginCard from '../../components/login-card/LoginCard'
import CurrentUserContext from '../../contexts/current-user/CurrentUserContext'
import { withRouter } from 'react-router-dom'

const LoginPage = props => (
  <div className='login-page'>
    <CurrentUserContext.Consumer>
      {({ setUserInfo, user, setUserDetails }) => (
        <LoginCard setUser={setUserInfo} setUserDetails={setUserDetails} user={user} {...props} />
      )}
    </CurrentUserContext.Consumer>
  </div>
)

export default withRouter(LoginPage)
