import React from "react";

import "./notification.style.css";

const Notification = props => {
  return (
    <div className="event-card lg">
      <div className="card-content">
        <h2 className="card-title">Notification</h2>
        <i className="fas fa-feather-alt"></i>
        <p className="info">
          <span>Posted by</span>
        </p>
      </div>
    </div>
  );
};

export default Notification;
