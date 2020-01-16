import React from 'react'
import './ContentContainer.scss'
import Navigation from '../navigation/Navigation'
import UserNavigation from '../user-navigation/UserNavigation'

const ContentContainer = ({ children }) => (
  <div className='content-container'>
    <div className='card'>
      <div className='nav'>
        <UserNavigation />
      </div>
      <div className='content-body'>{children}</div>
      <div className='mobile-tabs'>
        <Navigation />
      </div>
    </div>
  </div>
)

export default ContentContainer
