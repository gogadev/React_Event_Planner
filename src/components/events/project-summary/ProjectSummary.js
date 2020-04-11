import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { deleteEvent } from "../../../store/actions/eventActions";

import "./project-summary.style.css";

const ProjectSummary = ({ event, deleteEvent }) => {
  return (
    <div className="event-card">
      <div className="card-content">
        <h2 className="card-title">{event.title}</h2>
        <i className="fas fa-feather-alt"></i>
        <p className="info">
          <span>Posted by</span> {event.authorFirstName} {event.authorLastName}
        </p>
        <p>{moment(event.createdAt.toDate()).calendar()}</p>
      </div>
      <button className="btn" onClick={() => deleteEvent(event.id)}>
        X
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEvent: id => {
      dispatch(deleteEvent(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(ProjectSummary);
