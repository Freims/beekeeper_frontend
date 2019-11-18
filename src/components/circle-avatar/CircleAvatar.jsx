import React from 'react'
import './CircleAvatar.scss'

const CircleAvatar = ({ src }) => {
  return <div className='circle-avatar' style={{backgroundImage: `url(${src})`}} />
}

export default CircleAvatar
