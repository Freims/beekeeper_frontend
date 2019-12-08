import React from 'react'
import './CustomButton.scss'
import { LightenDarkenColor } from 'lighten-darken-color'
// import calculateFontColor from '../../utils/font-color-calculator'

const CustomButton = ({ color = '#FECD1C', text, width = '100%', type = 'button', login, ...props }) =>
  login ? (
    <input
      type={type}
      className='custom-button-login'
      style={{ backgroundColor: `${color}`, width: `${width}` }}
      value={text}
      {...props}
    />
  ) : (
    <input
      type={type}
      className='custom-button'
      style={{
        // color: calculateFontColor(color),
        backgroundColor: color,
        width: `${width}`,
        borderColor: `${LightenDarkenColor(color, -100)}`
      }}
      value={text}
      {...props}
    />
  )

export default CustomButton
