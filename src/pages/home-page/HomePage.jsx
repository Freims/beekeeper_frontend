import React, { useEffect, useState } from 'react'
import './HomePage.scss'

import UserDetails from '../../components/user-details/UserDetails'
import CardMobile from '../../components/card-mobile/CardMobile'
import Schedule from '../../components/schedule/Schedule'
import TodaySummary from '../../components/today-summary/TodaySummary'
import getToday from '../../utils/spanish-date'

const HomePage = ({ userDetails }) => {
  let user = {
    dbid: userDetails.dbid,
    id: userDetails.id,
    name: `${userDetails.firstName} ${userDetails.lastName}`,
    profileSrc: 'https://i.ibb.co/GdyX9VY/frames.jpg',
    program: userDetails.program
  }

  const [schedule, setSchedule] = useState(undefined)

  useEffect(
    () => {
      console.log(user)
      fetch(
        `https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetStudentSchedule/${userDetails.dbid}`
      )
        .then(res => res.json())
        .then(response => {
          if (response.ok) {
            setSchedule(response.resultData.courseList)
            console.log(response.resultData.courseList)
          } else {
            throw new Error('Connection error')
          }
        })
        .catch(error => console.log(error))
    },
    [userDetails]
  )

  return (
    <div className='home-page'>
      <div className='home-page-web'>
        <Schedule schedule={schedule} />
        <div>
          <span className='today-is'>{getToday()}</span>
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
          <span className='today-is'>{getToday()}</span>
          <div className='for-today'>
            <TodaySummary />
          </div>
        </CardMobile>
      </div>
    </div>
  )
}

export default HomePage
