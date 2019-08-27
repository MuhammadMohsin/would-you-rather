import React, { Component } from 'react';
import '../css/login.css';
import { Redirect } from 'react-router-dom';
import TitleImg from '../assets/would-u-r.png';
import { connect } from 'react-redux';
import { setAuthUser, detectAuthUser } from '../actions/authUser';

class Login extends Component {

  state = {
    selectedUserId: '',
    isAuthenticated: false
  }

  componentDidMount(){
    // detectAuthUser((isAuth)=>{
    //   console.log(isAuth)
    //   this.setState({isAuthenticated : isAuth})
    // })
  }

  handleSignin = () => {
    const { selectedUserId } = this.state;
    const user = this.props.users.find(user => user.id === selectedUserId);
    this.props.dispatch(setAuthUser(user));
    this.props.history.push('/')
  }
  render() {
    const { users } = this.props;
    const { selectedUserId, isAuthenticated } = this.state;
    const isDisabled = selectedUserId === '';
    return (
      <div className="login-container">
        <img src={TitleImg} alt="title-img" className="title-img" />
        <h1>Sign in</h1>
        <p>Please sign in to continue</p>
        <select
          className="login-select"
          onChange={(e) => this.setState({ selectedUserId: e.target.value })}
          defaultValue={selectedUserId}
        >
          <option value="" disabled hidden>Select user</option>
          {users.map(user =>
            <option value={user.id} key={user.id}>
              {user.name}
            </option>)}
        </select>
        <button
          disabled={isDisabled}
          className="signin-btn"
          style={{ 
            backgroundColor: isDisabled ? 'gray' : '', 
            cursor: isDisabled ? 'not-allowed' : '' 
          }}
          onClick={this.handleSignin}>
          Sign in
          </button>
      </div>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  return {
    users: Object.values(users),
    authUser
  }
}

export default connect(mapStateToProps)(Login)