import React from 'react'
import './StyledFraction.scss'

const StyledFraction = ({ color, numerator, denominator }) => (
  <div className="styled-fraction">
    <div className='numerator' style={{color:color}}>{numerator}</div>
    <div className='divider'>
    </div>
    <div className='denominator' style={{color: color}}>{denominator}</div>
  </div>
)

export default StyledFraction;
