import React, { useEffect, useState } from 'react'
import './HomePage.scss'

import UserDetails from '../../components/user-details/UserDetails'
import CardMobile from '../../components/card-mobile/CardMobile'
import Schedule from '../../components/schedule/Schedule'
import TodaySummary from '../../components/today-summary/TodaySummary'
import getToday from '../../utils/spanish-date'

const HomePage = ({ userDetails }) => {
  console.log(userDetails)
  let user = {
    id: userDetails.id,
    name: `${userDetails.firstName} ${userDetails.lastName}`,
    profileSrc: 'https://i.ibb.co/GdyX9VY/frames.jpg',
    program: userDetails.program
  }

  const fetchSchedule = async () => {
    try {
      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetStudentSchedule/2`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )
      let responseJson = await response.json()
      console.log(responseJson)

      return responseJson
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchSchedule()
  }, [])

  return (
    <div className='home-page'>
      <div className='home-page-web'>
        <Schedule />
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
