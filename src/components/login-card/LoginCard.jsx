import React from 'react'
import './LoginCard.scss'
import { ReactComponent as Logo } from '../../assets/images/beekeeper_logo.svg'
import CustomButton from '../custom-button/CustomButton'

const LoginCard = ({ children }) => (
  <div className='login-card'>
    <div className='logo-container'>
      <Logo />
    </div>

    

    <CustomButton width="40%" />
  </div>
)

export default LoginCard
