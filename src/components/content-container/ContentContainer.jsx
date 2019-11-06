import React from 'react'
import { Card } from '@material-ui/core'
import './ContentContainer.scss'

const ContentContainer = ({ children }) => (
  <div className='content-container'>
    <div className="card">{children}</div>
  </div>
)
export default ContentContainer
