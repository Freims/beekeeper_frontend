import React from 'react'
import './CustomButton.scss'

const CustomButton = ({ color = '#FECD1C', text = 'ACCEDER' }) => (
  <div className="custom-button" style={{ backgroundColor: `${color}` }}> {text} </div>
)

export default CustomButton
