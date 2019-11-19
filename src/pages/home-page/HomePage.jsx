import React from 'react'
import './HomePage.scss'

import UserDetails from '../../components/user-details/UserDetails'
import CardMobile from '../../components/card-mobile/CardMobile'

const HomePage = () => {
  
  let user = {
    name: 'Ted Evelyn Mosby',
    id: '1071614',
    profileSrc: require('../../assets/images/professor.jpeg'),
    program: 'Arquitectura Neoclásica'
  }

  return (
    <div className='home-page'>
      <div className='home-page-mobile'>
        <CardMobile>
          <UserDetails user={user} />
        </CardMobile>
      </div>
      Inicio
    </div>
  )
}

export default HomePage
