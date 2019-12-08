import React from 'react'
import './UserNavigation.scss'

import UserDetails from '../user-details/UserDetails'
import Navigation from '../navigation/Navigation'

const UserNavigation = ({ currentUser }) => {
  return (
    <div className='user-nav'>
      <div className='user-details-container'>
        <UserDetails />
      </div>
      <hr
        style={{
          backgroundColor: 'lightgray',
          height: 2
        }}
      />
      <div className='tabs'>
        <Navigation />
      </div>
    </div>
  )
}

export default UserNavigation
