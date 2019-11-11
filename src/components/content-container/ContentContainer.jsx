import React from 'react'
import './ContentContainer.scss'

import UserNavigation from '../user-navigation/UserNavigation'

const ContentContainer = ({ children }) => (
  <div className='content-container'>
    <div className='card'>
      <div className='nav'>
        <UserNavigation />
      </div>
      <div className='content-body'>{children}</div>
    </div>
  </div>
)
export default ContentContainer
