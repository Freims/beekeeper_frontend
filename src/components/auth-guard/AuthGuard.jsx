import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthGuard = ({ currentUser, children }) => (currentUser.id ? children : <Redirect to={'/login'} />)

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps)(AuthGuard)
