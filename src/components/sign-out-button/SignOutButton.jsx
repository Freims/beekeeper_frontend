import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import './SignOutButton.scss'
import { removeCurrentUser } from '../../redux/user/user-actions'
import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'

const SignOutButton = ({ removeCurrentUser, ...props }) => {
  const logout = () => {
    removeCurrentUser()
    localStorage.setItem("currentUser", JSON.stringify({}))
    localStorage.setItem("schedule", null)
    localStorage.setItem("todaySummary", null)

  }
  return (
    <NavLink to='/login' onClick={logout} className='sign-out-button' {...props}>
      <FontAwesomeIcon icon={faDoorOpen} />
    </NavLink>
  )
}

const mapDispatchToProps = dispatch => ({
  removeCurrentUser: user => dispatch(removeCurrentUser(user))
})

export default connect(
  null,
  mapDispatchToProps
)(SignOutButton)
