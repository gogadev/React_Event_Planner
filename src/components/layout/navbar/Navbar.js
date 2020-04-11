import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignedInLinks from "../signed-in-links/SignedInLinks";
import SignedOutLinks from "../signed-out-links/SignedOutLinks";

import navIcon from "../../../assets/feather.svg";
import img from "../../../assets/dashboard.jpeg";

import "./navbar.style.css";

const Navbar = props => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav>
      <Link to="/">
        <h1>
          <span>
            <img src={navIcon} alt="" />
          </span>{" "}
          Event Planner
          <span>
            <img src={navIcon} alt="" />
          </span>{" "}
        </h1>
      </Link>
      <div className="menu">
        <img className="img" src={img} alt="" />
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  // console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(Navbar);
