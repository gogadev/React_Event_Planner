import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import EventList from "../../events/event-list/EventList";

import "./dashboard.style.css";

class Dashboard extends Component {
  render() {
    // console.log(this.props)

    const { events, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard-container">
        <div className="dashboard">
          <div className="event-list">
            <EventList events={events} />
          </div>
          {/* <div className="notifications">
            <Notification />
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    events: state.firestore.ordered.events,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "events" }])
)(Dashboard);
