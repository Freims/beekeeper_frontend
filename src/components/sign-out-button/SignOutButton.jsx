import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import "./SignOutButton.scss";
import { removeCurrentUser } from "../../redux/user/user-actions";
import { removeCurrentClasses } from "../../redux/classes/classes-actions";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import { logoutUser } from "../../utils/url/fetch-handler";

const SignOutButton = ({
  removeCurrentUser,
  removeCurrentClasses,
  ...props
}) => {
  const logout = () => {
    logoutUser(removeCurrentUser, removeCurrentClasses);
  };
  return (
    <NavLink
      style={{ marginLeft: "1rem" }}
      to="/login"
      onClick={logout}
      className="sign-out-button"
      {...props}
    >
      <FontAwesomeIcon icon={faDoorOpen} />
    </NavLink>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCurrentUser: (user) => dispatch(removeCurrentUser(user)),
  removeCurrentClasses: (classes) => dispatch(removeCurrentClasses(classes)),
});

export default connect(null, mapDispatchToProps)(SignOutButton);
