import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";


import "./event-details.style.css";

const EventDetails = props => {
  const id = props.match.params.id;
  // console.log(props)
  const { event, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  if (event) {
    return (
      <div className="detail-card">
        <div className="detail-content">
          <h2 className="card-title bg">{event.title}</h2>
          <i className="fas fa-feather"></i>
          <h3 className="subtitle"> {event.content}</h3>
        </div>
        <p className="info detail">
          <span>Posted by</span> {event.authorFirstName} {event.authorLastName}
        </p>
        <h3 className="date">{moment(event.createdAt.toDate()).calendar()}</h3>
        <div className="button">
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const events = state.firestore.data.events;
  const event = events ? events[id] : null;
  return {
    event: event,
    auth: state.firebase.auth
  };
};



export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "events" }])
)(EventDetails);
