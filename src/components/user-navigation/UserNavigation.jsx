import React from 'react'
import './UserNavigation.scss'

import UserDetails from '../user-details/UserDetails'
import Navigation from '../navigation/Navigation'

const UserNavigation = ({ userDetails }) => {
  
  let user = {
    id: userDetails.id,
    name: `${userDetails.firstName} ${userDetails.lastName}`,
    // profileSrc: require('../../assets/images/professor.jpeg'),
    profileSrc: 'https://i.ibb.co/GdyX9VY/frames.jpg',
    program: userDetails.program
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
