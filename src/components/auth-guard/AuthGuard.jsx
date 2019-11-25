import React, { useState, useEffect } from 'react'
import CurrentUserContext from '../../contexts/current-user/CurrentUserContext'
import { withRouter } from 'react-router-dom'

const AuthGuard = ({ children, history }) => {
  const [user, setUser] = useState({
    id: '',
    type: ''
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userDetails, setUserDetails] = useState({
    id: '',
    firstName: '',
    lastName: '',
    program: 'Ingeniería de Software'
  })

  useEffect(
    () => {
      if (user.id !== '') setIsLoggedIn(true)
      // else history.push('/login')
    },
    [user, history]
  )
  const logout = () => {
    setUser({ id: '', type: '' })
  }

  const setUserInfo = (id, type) => {
    setUser({ id, type })
  }

  const value = {
    user,
    logout,
    setUserInfo,
    isLoggedIn,
    userDetails,
    setUserDetails
  }

  return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>
}

export default withRouter(AuthGuard)
