import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import './SignOutButton.scss';

const SignOutButton = () => (
  <span className="sign-out-button">
    <span className="text">Cerrar sesión</span>
    <FontAwesomeIcon icon={faDoorOpen} />
  </span>
)

export default SignOutButton
