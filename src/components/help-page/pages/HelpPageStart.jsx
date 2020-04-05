import React from "react";
import { ReactComponent as Logo } from "../../../assets/svgs/beekeeper_logo.svg";
import "./../HelpPage.scss";

const HelpPageStart = ({ children }) => {
  return (
    <div className="help-page-start fade-in-bck">
      <div className="help-page-start-title">
        ¡Bienvenido a beekeeper ayuda en línea!
      </div>
      <div className="help-page-start-subtitle">
        En esta aplicación podrás obtener todas las informaciones que necesites
        sobre beekeeper.
      </div>

      <div className="help-page-start-logo">
        <Logo />
      </div>
    </div>
  );
};

export default HelpPageStart;
