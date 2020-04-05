import React from "react";

import "./HelpPage.scss";
import SideBar from "../sidebar/SideBar";

const HelpPage = ({ children }) => {
  return (
    <div className="help-page">
      <div className="sidebar-content">
        <SideBar />
        <div className="sidebar-content-content">
          <div className="sidebar-content-container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
