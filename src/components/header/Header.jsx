import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/svgs/beekeeper_header.svg";
import SignOutButton from "../sign-out-button/SignOutButton";
import { useHistory } from "react-router-dom";
import HelpButton from "../help-button/HelpButton";

const Header = ({ noExit, style }) => {
  const history = useHistory();
  return (
    <div className="header-container" style={style}>
      <div className="header">
        <div className="header-content">
          <Logo className="logo" onClick={() => history.push("/")} />
          {!noExit && (
            <div
              style={{ display: "flex", flexDirection: "row" }}
              id="sign-out"
            >
              <HelpButton />
              <SignOutButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
