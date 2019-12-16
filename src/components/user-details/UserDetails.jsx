import React from 'react'
import './UserDetails.scss'
import CircleAvatar from '../circle-avatar/CircleAvatar'
import { connect } from 'react-redux'

const UserDetails = ({ currentUser }) => {
  const { name, id, program, img } = currentUser
  
  return (
    <div className='user-details'>
      <div className='circle-avatar-container'>
        <CircleAvatar src={img} />
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
