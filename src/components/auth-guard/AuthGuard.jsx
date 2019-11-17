import React, { useState } from 'react'
import CurrentUserContext from '../../contexts/current-user/CurrentUserContext'
import { Redirect } from 'react-router'

const AuthGuard = ({ children }) => {
  const [user, setUser] = useState({ id: '', password: '' })
  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {user.id ? children : <Redirect to='/login' />}
    </CurrentUserContext.Provider>
  )
}

export default AuthGuard
