import React from "react";
import "./LoginCard.scss";
import { ReactComponent as Logo } from "../../assets/images/beekeeper_logo.svg";
import CustomButton from "../custom-button/CustomButton";
import IconInput from "../icon-input/IconInput";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

const LoginCard = ({ children }) => (
  <div className="login-card">
    <div className="logo-container">
      <Logo />
    </div>
    <div className="form-container">
      <div className="form">
        <span className="label">ID</span>
        <IconInput type="text" icon={faUser} />
      </div>
      <div className="form">
        <span className="label">Contraseña</span>
        <IconInput type="password" icon={faKey} />
      </div>
    </div>
    <CustomButton text="ACCEDER" width="40%" />
  </div>
);

export default LoginCard;
