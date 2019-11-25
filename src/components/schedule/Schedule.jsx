import React from 'react'
import './Schedule.scss'

const Schedule = ({ classes }) => {
  classes = [
    {
      course: 'Calculo Integral',
      schedule: ['18/20', '', '18/20', '', '18/19', ''],
      room: 'GC312'
    },
    {
      course: 'Biología IV',
      schedule: ['', '07/09', '', '14/16', '18/19', ''],
      room: 'ER206'
    },
    {
      course: 'Ergonomia',
      schedule: ['', '07/11', '', '', '11/12', '09/13'],
      room: 'AJ202'
    }
  ]

  return (
    <table className='schedule'>
      <tr className='header-row'>
        <th>Asignatura</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miércoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sábados</th>
        <th></th>
      </tr>
      {classes.map(intecClass => (
        <tr>
          <td>{intecClass.course}</td>
          <td>{intecClass.schedule[0]}</td>
          <td>{intecClass.schedule[1]}</td>
          <td>{intecClass.schedule[2]}</td>
          <td>{intecClass.schedule[3]}</td>
          <td>{intecClass.schedule[4]}</td>
          <td>{intecClass.schedule[5]}</td>
          <td>{intecClass.room}</td>
        </tr>
      ))}
    </table>
  )
}

export default Schedule
