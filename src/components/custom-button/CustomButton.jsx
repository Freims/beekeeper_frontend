import React from 'react'
import './CustomButton.scss'
import { LightenDarkenColor } from 'lighten-darken-color'
import calculateFontColor from '../../utils/font-color-calculator'

const CustomButton = ({
  color = '#FECD1C',
  text,
  width = '100%',
  type = 'button',
  login,
  disabled,
  ...props
}) => {
  let borderColor = LightenDarkenColor(color, -40);
  let fontColor = calculateFontColor(color);
  if (disabled) {
    color = 'lightgray'
    borderColor = 'darkgrey'
    fontColor = "black"
  }

  return login ? (
    <input
      type={type}
      className='custom-button-login'
      style={{ backgroundColor: `${color}`, width: `${width}` }}
      value={text}
      {...props}
    />
  ) : (
    <input
      disabled={disabled}
      type={type}
      className='custom-button'
      style={{
        color: fontColor,
        backgroundColor: color,
        width: `${width}`,
        borderColor: borderColor
      }}
      value={text}
      {...props}
    />
  )
}
export default CustomButton
