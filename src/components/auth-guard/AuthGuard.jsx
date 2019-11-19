import React, { useState, useEffect } from 'react'
import CurrentUserContext from '../../contexts/current-user/CurrentUserContext'

const AuthGuard = ({ children }) => {
  const [user, setUser] = useState({
    id: '',
    type: ''
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(
    () => {
      if (user.id !== '') setIsLoggedIn(true)
    },
    [user]
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
    isLoggedIn
  }

  return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>
}

export default AuthGuard
