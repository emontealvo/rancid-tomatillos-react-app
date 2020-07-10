import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./LogIn.css";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };    
    {console.log(this.props)}    
  }

  updateLoginFields(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  loginUser() {
    this.props.postUser(this.state);
  }

  loginCheck() {
    if(!this.props.postUser(this.state)) {
      console.log(false, 'logincheck')
    } else {
      this.props.postUser(this.state);
      console.log(true, 'logincheck');
    }
  }


  render() {
      return (
        <form>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={(event) => this.updateLoginFields(event)}
          />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={(event) => this.updateLoginFields(event)}
          />
          <Link to="/">
            <button onClick={(event) => this.loginUser(event)}>Submit</button>
          </Link>
        </form>
      );
  }
}
export default LogIn;

LogIn.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

