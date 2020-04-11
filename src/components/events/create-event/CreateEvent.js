import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../../../store/actions/eventActions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import "./create-event.style.css";

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createEvent(this.state);
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="event-section">
        <form className="form" onSubmit={this.handleSubmit}>
          <h4 className="main-title">Create New Event</h4>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <div className="input">
            <input
              type="text"
              name="content"
              placeholder="Content"
              value={this.state.content}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="button">
            <button type="submit">Create Event</button>
          </div>
          <div className="button back">
            <Link to="/">
              <button>Go Back</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: event => dispatch(createEvent(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
