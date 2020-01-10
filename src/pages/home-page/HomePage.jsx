import React, { useEffect, useState } from "react";
import "./HomePage.scss";

import UserDetails from "../../components/user-details/UserDetails";
import Schedule from "../../components/schedule/Schedule";
import TodaySummary from "../../components/today-summary/TodaySummary";
import getToday from "../../utils/spanish-date";
import { setCurrentClasses } from "../../redux/classes/classes-actions";

import { connect } from "react-redux";
import { fetchSchedule, fetchTodaySummary, fetchClasses } from "../../utils/url/fetch-handler";

const HomePage = ({ currentUser, setCurrentClasses }) => {
  const [schedule, setSchedule] = useState();
  const [todaySummaryList, setTodaySummaryList] = useState();

  useEffect(() => {
    fetchClasses(currentUser.dbId, setCurrentClasses);
    fetchSchedule(currentUser.dbId, setSchedule);
    fetchTodaySummary(currentUser.dbId, setTodaySummaryList);
  }, [currentUser, setCurrentClasses]);

return (
    <div className="home-page">
      <div className="home-page-web">
        <Schedule data={schedule} />
        <div className="today-is-container">
          <span className="today-is">{getToday()}</span>
          <div className="for-today">
            <TodaySummary data={todaySummaryList} />
          </div>
        </div>
      </div>
      <div className="home-page-mobile">
        <div className="details-container">
          <UserDetails />
          <div className="schedule-container">
            <Schedule data={schedule} />
          </div>
        </div>
        <div className="for-today-container">
          <span className="today-is">{getToday()}</span>
          <div className="for-today">
            <TodaySummary data={todaySummaryList} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentClasses: classes => dispatch(setCurrentClasses(classes))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
