import React from 'react'
import './HomePage.scss'

import UserDetails from '../../components/user-details/UserDetails'
import CardMobile from '../../components/card-mobile/CardMobile'
import Schedule from '../../components/schedule/Schedule'
import TodaySummary from '../../components/today-summary/TodaySummary'

const HomePage = ({ userDetails }) => {
  console.log(userDetails)
  let user = {
    id: userDetails.id,
    name: `${userDetails.firstName} ${userDetails.lastName}`,
    profileSrc: 'https://i.ibb.co/GdyX9VY/frames.jpg',
    program: userDetails.program
  }

  return (
    <div className='home-page'>
      <div className='home-page-web'>
        <Schedule />
        <div>
          <span className='today-is'>Hoy es Miércoles 27 de Noviembre del 2019</span>
          <div className='for-today'>
            <TodaySummary />
          </div>
        </div>
      </div>
      <div className='home-page-mobile'>
        <CardMobile>
          <UserDetails user={user} />
          <Schedule />
        </CardMobile>
        <CardMobile>
          <span className='today-is'>Hoy es Miércoles 27 de Noviembre del 2019</span>
          <div className='for-today'>
            <TodaySummary />
          </div>
        </CardMobile>
      </div>
    </div>
  )
}

export default HomePage
