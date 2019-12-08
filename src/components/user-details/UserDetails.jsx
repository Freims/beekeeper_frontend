import React from 'react'
import './UserDetails.scss'
import CircleAvatar from '../circle-avatar/CircleAvatar'
import { connect } from 'react-redux'

const UserDetails = ({ currentUser }) => {
  const { name, id, profileSrc, program } = currentUser

  return (
    <div className='user-details'>
      <div className='circle-avatar-container'>
        <CircleAvatar src={profileSrc} />
      </div>
      <div className='info'>
        <div className='name'>{name}</div>
        <div className='id'>{id}</div>
        <div className='program'>{program}</div>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(UserDetails)
