import React from "react";
import "./ClassesPage.scss";
import Course from "../../components/course/Course";
import { connect } from "react-redux";

const ClassesPage = ({ currentClasses }) => (
  <div className="classes-page">
    <div className="class-container">
      {currentClasses.map(intecclass =>
        intecclass ? (
          <div key={intecclass.course} className="class-component">
            <Course data={intecclass} />
          </div>
        ) : (
          "No tienes materias inscritas."
        )
      )}
    </div>
  </div>
);

const mapStateToProps = ({ classes }) => ({
  currentClasses: classes.currentClasses
});

export default connect(mapStateToProps)(ClassesPage);
