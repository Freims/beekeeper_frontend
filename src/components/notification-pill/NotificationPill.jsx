import React, { Fragment, useState } from "react";
import "./NotificationPill.scss";

import { faExpandArrowsAlt, faUserAltSlash, faInfoCircle, faUserClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../custom-button/CustomButton";

import { LightenDarkenColor } from "lighten-darken-color";
import calculateFontColor from "../../utils/font-color-calculator";
import Modal from "../modal/Modal";

const NotificationPill = ({ notification, color = "#FECD1C" }) => {
  const { title, description, createdDate } = notification;
  const [visible, setVisible] = useState(false);
  const abssence = title.toLowerCase().includes("ausencia");
  const late = title.toLowerCase().includes("tardanza");
  return (
    <Fragment>
      <div
        className="notification-pill scale-in-center"
        style={{
          backgroundColor: `${color}`,
          borderColor: `${LightenDarkenColor(color, -40)}`
        }}
        onClick={() => setVisible(true)}
      >
        <span
          className="date"
          style={{ color: `${calculateFontColor(color)}` }}
        >
          {`${createdDate} -   `}{ abssence ?  <FontAwesomeIcon icon={faUserAltSlash} /> : late ? <FontAwesomeIcon icon={faUserClock} /> : <FontAwesomeIcon icon={faInfoCircle} /> }
        </span>
        <span className="view-more">
          <FontAwesomeIcon icon={faExpandArrowsAlt} />
        </span>
      </div>
      <Modal visible={visible} setVisible={setVisible}>
        {closeModal => (
          <div className="notification-content">
            <div className="notification-content-header">
              <span className="notification-title"> {createdDate}</span>
              <span className="notification-date"> {title}</span>

            </div>
            <div className="horizontal-line" />
            <div className="notification-content-body">
              {description}
              <div className="notification-dismiss">
                <CustomButton
                  value="OK"
                  color={color}
                  width={"6rem"}
                  onClick={closeModal}
                />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Fragment>
  );
};
export default NotificationPill;
