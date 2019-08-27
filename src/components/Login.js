import React, { Component } from 'react';
import '../css/login.css';
import TitleImg from '../assets/would-u-r.png';

class Login extends Component {

  handleChange = (e) => {
    console.log(e.target.value);
  }
  render() {
    return (
      <div className="login-container">
        <img src={TitleImg} alt="title-img" className="title-img" />
        <h1>Sign in</h1>
        <p>Please sign in to continue</p>
        <select className="login-select" onChange={this.handleChange}>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
        <button className="signin-btn">Sign in</button>
      </div>
    );
  }
}

export default Login;
