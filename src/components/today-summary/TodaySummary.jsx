import React from 'react'
import './TodaySummary.scss'

const TodaySummary = ({ data, color="indianred" }) =>
  data ? (
    data.length > 0 ? (
      data.map(todaySummary => (
        <div key={todaySummary.name} className='today-summary'>
          <div className='intec-class' style={{backgroundColor: `${color}`}}>{todaySummary.name}</div>
          <div className='today-info'>
            <span>{todaySummary.schedule}</span>
            <span>{todaySummary.building}</span>
          </div>
        </div>
      ))
    ) : (
      <span role='img' aria-label='smile' className='free-day'>
        {' '}
        Día Libre &#128513;
      </span>
    )
  ) : (
    <span>. . .</span>
  )

export default TodaySummary
