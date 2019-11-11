import React from 'react'
import './UserDetails.scss'
import CircleAvatar from '../circle-avatar/CircleAvatar'

const UserDetails = ({ user }) => {
  const { name, id, profileSrc, program } = user

  return (
    <div className='user-details'>
      <div className='circle-avatar-container'>
        <CircleAvatar src={profileSrc} />
      </div>
      <div className='name'>{name}</div>
      <div className='id'>{id}</div>
      <div className='program'>{program}</div>
    </div>
  )
}

export default UserDetails
