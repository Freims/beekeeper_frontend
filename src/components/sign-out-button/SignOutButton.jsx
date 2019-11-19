import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import './SignOutButton.scss'

import CurrentUserContext from '../../contexts/current-user/CurrentUserContext'

const SignOutButton = ({ ...props }) => (
  <CurrentUserContext.Consumer>
    {({ logout }) => (
      <div onClick={logout} className='sign-out-button' {...props}>
        <span className='text'>Cerrar sesión</span>
        <FontAwesomeIcon icon={faDoorOpen} />
      </div>
    )}
  </CurrentUserContext.Consumer>
)

export default SignOutButton
