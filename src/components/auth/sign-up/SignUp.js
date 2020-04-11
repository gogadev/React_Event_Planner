import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { signUp } from "../../../store/actions/authActions";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="login-signup">
        <form className="form" onSubmit={this.handleSubmit}>
          <h4 className="main-title">Sign Up</h4>
          <input
            type="text"
            name="firstName"
            placeholder="Enter Your Name"
            value={this.state.firstName}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Your Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className="button">
            <button type="submit">Sign Up</button>
            <div className="error">{authError ? <p>{authError}</p> : null}</div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
