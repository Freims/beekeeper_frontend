import React from 'react'
import './Test.scss'
import Counter from 'react-omni-counter'

const Test = ({ pepe }) => {
  let next90Mins = new Date(Date.now() + 10000)

  return (
    <div className='test'>
      <Counter to={next90Mins} mode="s"/>
      <pre> left</pre>
    </div>
  )
}
export default Test
