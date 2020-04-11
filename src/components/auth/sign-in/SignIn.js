import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/authActions";
import { Redirect } from "react-router-dom";

import "./sign-in.style.css";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="login-signup">
        <form className="form" onSubmit={this.handleSubmit}>
          <h4 className="main-title">Sign In</h4>
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
            <button type="submit">Login</button>

            <div className="error">
              {this.props.authError ? <p>{this.props.authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
