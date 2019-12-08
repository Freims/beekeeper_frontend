import React, { useEffect, useState } from 'react'
import './HomePage.scss'

import UserDetails from '../../components/user-details/UserDetails'
import CardMobile from '../../components/card-mobile/CardMobile'
import Schedule from '../../components/schedule/Schedule'
import TodaySummary from '../../components/today-summary/TodaySummary'
import getToday from '../../utils/spanish-date'

import { connect } from 'react-redux'

const HomePage = ({ currentUser }) => {
  const [schedule, setSchedule] = useState(undefined)

  useEffect(
    () => {
      console.log(currentUser)
      fetch(
        `https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetStudentSchedule/${
          currentUser.dbId
        }`
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
    [currentUser]
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
          <UserDetails user={currentUser} />
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

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps)(HomePage)
