import React from 'react'
import './MobileContentContainer.scss'
import Navigation from '../navigation/Navigation'

const MobileContentContainer = ({ children }) => (
  <div className='mobile-container'>
    <div className='mobile-content'>{children}</div>
    <div className='mobile-tabs'>
      <Navigation />
    </div>
  </div>
)

export default MobileContentContainer
