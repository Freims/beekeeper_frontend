import React, { useEffect } from 'react'
import './Schedule.scss'
import { mapClassToRow } from '../../utils/data-mapping'

const Schedule = ({ schedule }) => {
  useEffect(
    () => {
      console.log('refreshed')
    },
    [schedule]
  )

  return (
    <table className='schedule'>
      <thead>
        <tr className='header-row'>
          <th>Asignatura</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sábados</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {schedule ? (
          schedule.map(intecClass => {
            let row = mapClassToRow(intecClass)
            return (
              <tr key={intecClass.name}>
                <td>{intecClass.name}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>{row[5]}</td>
                <td>{row[6]}</td>
                <td>{row[7]}</td>
              </tr>
            )
          })
        ) : (
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Schedule
