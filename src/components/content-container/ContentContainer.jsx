import React from 'react'
import { Card } from '@material-ui/core'
import './ContentContainer.scss'

const ContentContainer = ({ children }) => (
  <div className='content-container'>
    <Card style={{backgroundColor: "lightgray"}}className='card'>{children}</Card>
  </div>
)
export default ContentContainer
