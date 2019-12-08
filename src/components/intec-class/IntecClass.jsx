import React from 'react'
import './IntecClass.scss'
import { NavLink, useRouteMatch } from 'react-router-dom'

import generateColor from '../../utils/color-from-string'

const IntecClass = ({ intecclass }) => {
  const { name, absence, notices } = intecclass
  let { path } = useRouteMatch()
  let color = generateColor(`${name.replace(/\s/g, '').toLowerCase()}`)

  return (
    <div className='intec-class-component '>
      <NavLink to={`${path}/${name.replace(/\s/g, '').toLowerCase()}`} className='nav-link-remove-styles'>
        <div className='name' style={{ backgroundColor: color }}>
          {name}
        </div>
        <div className='info'>
          <div className='text-around'>
            <span>Ausencias</span>
            <span>{absence}</span>
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
