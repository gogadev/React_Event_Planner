import React from "react";
import { Link } from "react-router-dom";

import "./event-list.style.css"

import ProjectSummary from "../project-summary/ProjectSummary";

const EventList = ({ events }) => {
  return (
    <div className="event-list-section">
      {events &&
        events.map((event, id) => {
          return (
            <div className="list">
            <Link to={"/event/" + event.id}>
              <ProjectSummary key={id} event={event}  />
            </Link>
            </div>
          );
        })}
    </div>
  );
};

export default EventList;
