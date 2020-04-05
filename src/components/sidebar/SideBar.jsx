import React from "react";
import "./SideBar.scss";
import SideBarItem from "../sidebar-item/SideBarItem";
import Header from "../header/Header";
import {
  faHome,
  faUser,
  faUserTie,
  faBaby,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Header noExit style={{ boxShadow: "none" }} />
      </div>
      <div className="sidebar-logo-mobile">
        <SideBarItem icon={faArrowLeft} to="/login" />
      </div>
      <div
        className="sidebar-ayuda"
        style={{
          textAlign: "center",
          borderBottom: "2px solid #e4b61267",
          paddingBottom: "1rem",
        }}
      >
        Ayuda en línea
      </div>
      <SideBarItem icon={faHome} name="Inicio" to="/help/start" />
      <SideBarItem
        icon={faBaby}
        name="Principiante"
        to="/help/functionalities"
      />
      <SideBarItem icon={faUser} name="Estudiantes" to="/help/student" />
      <SideBarItem icon={faUserTie} name="Docentes" to="/help/professor" />
    </div>
  );
};

export default SideBar;
