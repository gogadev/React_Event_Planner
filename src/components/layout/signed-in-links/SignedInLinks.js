import React, { Profiler } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

import "./signed-in.style.css";

const SignedInLinks = props => {
  // console.log(props)
  return (
    <ul className="menu-links">
      <li>
        <NavLink to="/create">New Event</NavLink>
      </li>
      <li>
        <a href="#" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/">
          {" "}
          <h4 className="menu-name"> Welcome {props.profile.firstName} </h4>
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
