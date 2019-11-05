import React from 'react'
import { ExitToApp } from "@material-ui/icons";
import './SignOutButton.scss';

const SignOutButton = () => (
  <span className="sign-out-button">
    <h2 className="text">Cerrar sesión</h2>
    <ExitToApp className="icon"/>
  </span>
)

export default SignOutButton
