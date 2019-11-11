import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import './SignOutButton.scss';

import { NavLink } from 'react-router-dom'


const SignOutButton = ({...props}) => (
  <NavLink to="/" className="sign-out-button" {...props}>
    <span className="text">Cerrar sesión</span>
    <FontAwesomeIcon icon={faDoorOpen} />
  </NavLink>
)

export default SignOutButton
