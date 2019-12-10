import React, { useEffect, useState } from 'react'
import './HomePage.scss'

import UserDetails from '../../components/user-details/UserDetails'
import CardMobile from '../../components/card-mobile/CardMobile'
import Schedule from '../../components/schedule/Schedule'
import TodaySummary from '../../components/today-summary/TodaySummary'
import getToday from '../../utils/spanish-date'

import { connect } from 'react-redux'
import { fetchSchedule, fetchTodaySummary } from '../../utils/response-handler'

const HomePage = ({ currentUser }) => {
  const [schedule, setSchedule] = useState(undefined)
  const [todaySummaryList, setTodaySummaryList] = useState(undefined)

  useEffect(
    () => {
      fetchSchedule(currentUser.dbId, setSchedule)
      fetchTodaySummary(currentUser.dbId, setTodaySummaryList)
    },
    [currentUser]
  )

  return (
    <div className='home-page'>
      <div className='home-page-web'>
        <Schedule data={schedule} />
        <div>
          <span className='today-is'>{getToday()}</span>
          <div className='for-today'>
            <TodaySummary data={todaySummaryList} />
          </div>
        </div>
      </div>
      <div className='home-page-mobile'>
        <CardMobile>
          <UserDetails />
          <Schedule data={schedule} />
        </CardMobile>
        <CardMobile>
          <span className='today-is'>{getToday()}</span>
          <div className='for-today'>
            <TodaySummary data={todaySummaryList} />
          </div>
        </CardMobile>
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps)(HomePage)
