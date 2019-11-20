import React from 'react'
import './ContentContainer.scss'

import UserNavigation from '../user-navigation/UserNavigation'

import CurrentUserContext from '../../contexts/current-user/CurrentUserContext'

const ContentContainer = ({ children }) => (
  <div className='content-container'>
    <div className='card'>
      <div className='nav'>
        <CurrentUserContext.Consumer>
          {({ userDetails }) => <UserNavigation userDetails={userDetails}/>}
        </CurrentUserContext.Consumer>
      </div>
      <div className='content-body'>{children}</div>
    </div>
  </div>
)
export default ContentContainer
