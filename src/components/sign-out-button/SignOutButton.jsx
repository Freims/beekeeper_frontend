import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import './SignOutButton.scss'

import { NavLink } from 'react-router-dom'
import CurrentUserContext from '../../contexts/current-user/CurrentUserContext'

const SignOutButton = ({ ...props }) => (
  <CurrentUserContext.Consumer>
    {({ logout }) => (
      <NavLink to='/login' onClick={logout} className='sign-out-button' {...props}>
        <FontAwesomeIcon icon={faDoorOpen} />
      </NavLink>
    )}
  </CurrentUserContext.Consumer>
)

export default SignOutButton
