import React from "react";
import "./TodaySummary.scss";
import generateColor from "../../utils/color-from-string";
import calculateFontColor from "../../utils/font-color-calculator";
import { withRouter } from "react-router-dom";

const TodaySummary = ({ data, history }) =>
  data ? (
    data.length > 0 ? (
      data.map(todaySummary => {
        let color = generateColor(todaySummary.name + '1');
        return (
          <div
            key={todaySummary.name}
            className="today-summary"
            onClick={() => history.push(`/clases/${todaySummary.name}`)}
          >
            <div
              className="intec-class"
              style={{
                color: `${calculateFontColor(color)}`,
                backgroundColor: color
              }}
            >
              {todaySummary.name}
            </div>
            <div className="today-info">
              <span>{todaySummary.schedule}</span>
              <span>{todaySummary.building}</span>
            </div>
          </div>
        );
      })
    ) : (
      <span role="img" aria-label="smile" className="free-day">
        Día Libre &#128513;
      </span>
    )
  ) : (
    <span>. . .</span>
  );

export default withRouter(TodaySummary);
