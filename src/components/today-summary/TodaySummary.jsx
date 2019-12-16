import React from 'react'
import './TodaySummary.scss'
import generateColor from '../../utils/color-from-string'
import calculateFontColor from '../../utils/font-color-calculator'

const TodaySummary = ({ data, color = 'indianred' }) =>
  data ? (
    data.length > 0 ? (
      data.map(todaySummary => (
        <div key={todaySummary.name} className='today-summary'>
          <div
            className='intec-class'
            style={{
              color: `${calculateFontColor(todaySummary.name + '1')}`,
              backgroundColor: `${generateColor(todaySummary.name + '1')}`
            }}
          >
            {todaySummary.name}
          </div>
          <div className='today-info'>
            <span>{todaySummary.schedule}</span>
            <span>{todaySummary.building}</span>
          </div>
        </div>
      ))
    ) : (
      <span role='img' aria-label='smile' className='free-day'>
        Día Libre &#128513;
      </span>
    )
  ) : (
    <span>. . .</span>
  )

export default TodaySummary
