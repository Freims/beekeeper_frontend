import React from 'react'
import './Course.scss'
import { NavLink, useRouteMatch } from 'react-router-dom'

import generateColor from '../../utils/color-from-string'
import calculateFontColor from '../../utils/font-color-calculator'
import { connect } from "react-redux";

const Course = ({ data, currentUser }) => {
  const { course, absences, notices } = data
  let { path } = useRouteMatch()
  let color = generateColor(`${course}1`)
  let fontColor = calculateFontColor(color);
  let isProfessor = currentUser.role === "Professor"

  return (
    <div className='intec-class-component '>
      <NavLink to={`${path}/${course}`} className='nav-link-remove-styles'>
        <div className='name' style={{ backgroundColor: color, color: fontColor }}>
          {course}
        </div>
        <div className='info'>
          <div className='text-around'>
            <span>{isProfessor ? 'Asistencias' :  'Ausencias'}</span>
            <span>{absences}</span>
          </div>
          <div className='text-around'>
            <span>{isProfessor ? 'Excusas' :  'Avisos'}</span>
            <span>{notices}</span>
          </div>
        </div>
      </NavLink>
    </div>
  )
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps)(Course);
