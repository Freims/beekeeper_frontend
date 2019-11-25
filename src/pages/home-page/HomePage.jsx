import React from "react";
import "./HomePage.scss";

import UserDetails from '../../components/user-details/UserDetails'
import CardMobile from '../../components/card-mobile/CardMobile'
import Schedule from '../../components/schedule/Schedule'

const HomePage = ({ userDetails }) => {
  console.log(userDetails)
  let user = {
    id: userDetails.id,
    name: `${userDetails.firstName} ${userDetails.lastName}`,
    profileSrc: "https://i.ibb.co/GdyX9VY/frames.jpg",
    program: userDetails.program
  };

  return (
    <div className='home-page'>
      <div className='home-page-web'>
        <Schedule />
      </div>
      <div className='home-page-mobile'>
        <CardMobile>
          <UserDetails user={user} />
          <Schedule />
        </CardMobile>
      </div>
      Inicio
    </div>
  );
};

export default HomePage;
