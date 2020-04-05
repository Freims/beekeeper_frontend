import React from "react";
import "./SideBarItem.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarItem = ({ name, to, icon }) => {
  return (
    <NavLink
      activeClassName="sidebar-item-active"
      className="sidebar-item"
      to={to}
    >
      {
        <span>
          <FontAwesomeIcon icon={icon} />{" "}
          <span className="sidebar-item-name" style={{ marginLeft: "1.2rem" }}>{name}</span>
        </span>
      }
    </NavLink>
  );
};

export default SideBarItem;
