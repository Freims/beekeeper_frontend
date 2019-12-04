import React from 'react'
import './Test.scss'
import TodaySummary from '../today-summary/TodaySummary'
import StyledFraction from '../styled-fraction/StyledFraction'
import NotificationPill from '../notification-pill/NotificationPill'
const Test = ({ pepe }) => {
  let pp = {
    author: 'Profesor',
    date: '22/12/2019',
    msg:
      'Buenas jóvenes, la verdad es que no podré asistir ' +
      'a la clase pautada para el 23/12/2019 por unos ' +
      'asuntos familiares, espero que lo puedan entender.'
  }
  return (
    <div className='test'>
      <TodaySummary />
      <StyledFraction color={'indianred'} numerator={4} denominator={5} />
      <NotificationPill notification={pp} />
    </div>
  )
}
export default Test
