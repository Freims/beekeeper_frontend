import React from 'react'
import './UserNavigation.scss'

import UserDetails from '../user-details/UserDetails'
import Navigation from '../navigation/Navigation'

const UserNavigation = ({ user }) => {
  user = {
    name: 'Ted Evelyn Mosby',
    id: '1071614',
    profileSrc: require('../../assets/images/professor.jpeg'),
    program: 'Arquitectura Neoclásica'
  }

  return (
    <div className='user-nav'>
      <div className='user-details-container'>
        <UserDetails user={user} />
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
