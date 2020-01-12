import React from 'react'
import './Test.scss'
import Counter from 'react-omni-counter'

const Test = ({ pepe }) => {
  let next90Mins = new Date(Date.now() + 5400000)

  return (
    <div className='test'>
      <Counter timeleft={1200} />
      <Counter to={next90Mins} mode="hh:mm:ss"/>   
    </div>
  )
}
export default Test
