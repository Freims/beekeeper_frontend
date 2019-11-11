import React from "react";
import "./UserNavigation.scss";

import NavItem from "../nav-item/NavItem";
import UserDetails from "../user-details/UserDetails";

const UserNavigation = () => {
  let user = {
    name: "Ted Evelyn Mosby",
    id: "1071614",
    profileSrc: require("../../assets/images/professor.jpeg"),
    program: "Arquitectura Neoclásica"
  };

  const tabs = [
    <NavItem key="inicio" exact to={"/pepe"} title={"Inicio"} />,
    <NavItem key="misClases" to={"/freims"} title={"Mis clases"} />
  ];

  return (
    <div className="user-nav">
      <div className="user-details-container">
        <UserDetails user={user} />
      </div>
      <hr
        style={{
          backgroundColor: "lightgray",
          height: 2
        }}
      />

      <div className="tabs">{tabs}</div>
    </div>
  );
};

export default UserNavigation;
