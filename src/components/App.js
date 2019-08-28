import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import DefaultComponent from './404Page';
import Login from './Login';
import Home from './Home';
import Leaderboard from './Leaderboard';
import AddQuestion from './AddQuestion';
import ViewQuestions from './ViewQuestions.js';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { setAuthUser, removeAuthUser, detectAuthUser } from '../actions/authUser';
import PrivateRoute from '../components/ProtectedRoute';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
    detectAuthUser((isAuth, userObj) => {
      if (isAuth) {
        this.props.dispatch(setAuthUser(userObj));
      }
    });
  }

  handleLogout = () => {
    this.props.dispatch(removeAuthUser());
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <NavBar handleLogout={this.handleLogout} />
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/add" component={AddQuestion} />
          <PrivateRoute path="/leaderboard" component={Leaderboard} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/questions/:id" component={ViewQuestions} />
          <Route component={DefaultComponent} />
        </Switch>
      </div>
    );
  }
}

export default connect()(withRouter(App));