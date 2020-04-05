import React from 'react'
import './Schedule.scss'
import { mapClassToRow } from '../../utils/data-mapping'

const Schedule = ({ data }) => {
  return (
    <table className='schedule'>
      <thead>
        <tr className='header-row'>
          <th>Asignaturas</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sábados</th>
          <th>Aulas</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.length > 0 ? (
            data.map(intecClass => {
              let row = mapClassToRow(intecClass)
              return (
                <tr key={intecClass.name}>
                  <td>{intecClass.name}</td>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                  <td>{row[4]}</td>
                  <td>{row[5]}</td>
                  <td>{row[6]}</td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan='7'>
                <h4>No tienes materias inscritas</h4>
              </td>
            </tr>
          )
        ) : (
          <tr>
            <td colSpan='7'>. . .</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Schedule
