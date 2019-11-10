import React from 'react'
import './Header.scss'
import { ReactComponent as Logo } from '../../assets/svgs/beekeeper_header.svg'
import SignOutButton from '../sign-out-button/SignOutButton'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header'>
        <div className='content'>
          <Logo className='logo' />
          <SignOutButton />
        </div>
      </div>
    </div>
  )
}

export default Header
