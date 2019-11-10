import React from 'react'
import './ContentContainer.scss'

const ContentContainer = ({ children }) => (
  <div className='content-container'>
    <div className='card'>
      {children}
    </div>
  </div>
)
export default ContentContainer
