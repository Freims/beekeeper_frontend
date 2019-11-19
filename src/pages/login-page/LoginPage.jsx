import React from 'react'
import './LoginPage.scss'
import LoginCard from '../../components/login-card/LoginCard'
import CurrentUserContext from '../../contexts/current-user/CurrentUserContext'

const LoginPage = props => (
  <div className='login-page'>
    <CurrentUserContext.Consumer>
      {({setUserInfo, user}) => 
      <LoginCard setUser={setUserInfo} user={user} {...props} />
      }
    </CurrentUserContext.Consumer>
    
  </div>
)

export default LoginPage
