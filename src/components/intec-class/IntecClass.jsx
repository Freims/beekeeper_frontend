import React from 'react'
import './IntecClass.scss'
import { NavLink, useRouteMatch } from 'react-router-dom'

import generateColor from '../../utils/color-from-string'
import calculateFontColor from '../../utils/font-color-calculator'

const IntecClass = ({ intecclass }) => {
  const { sectionId, course, absences, notices } = intecclass
  let { path } = useRouteMatch()
  let color = generateColor(`${course}1`)
  let fontColor = calculateFontColor(color);

  return (
    <div className='intec-class-component '>
      <NavLink to={`${path}/${sectionId}`} className='nav-link-remove-styles'>
        <div className='name' style={{ backgroundColor: color, color: fontColor }}>
          {course}
        </div>
        <div className='info'>
          <div className='text-around'>
            <span>Ausencias</span>
            <span>{absences}</span>
          </div>
          <div className='text-around'>
            <span>Avisos</span>
            <span>{notices}</span>
          </div>
        </div>
      </NavLink>
    </div>
  )
}
export default IntecClass
