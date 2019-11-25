import React from 'react'
import './Test.scss'
import TodaySummary from '../today-summary/TodaySummary'
const Test = ({ pepe }) => {
  return (
    <div className='test'>
      {/* {pepe} */}
      <TodaySummary/>
    </div>
  )
}
export default Test
