import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  const isAuth = !!currentUser
  return (
    <Route {...rest} render={props => (isAuth ? <Component {...props} {...rest} /> : <Redirect to={'/login'} />)} />
  )
}

export default ProtectedRoute
