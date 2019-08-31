import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import DefaultComponent from './404Page';
import Login from './Login';
import Home from './Home';
import Leaderboard from './Leaderboard';
import AddQuestion from './AddQuestion';
import Question from './Questions.js';
import Result from './QuestionResult';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { setAuthUser, removeAuthUser, detectAuthUser } from '../actions/authUser';
import PrivateRoute from '../components/ProtectedRoute';

class App extends Component {

  state = {
    activePath: "/"
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
    detectAuthUser((isAuth, userObj) => {
      if (isAuth) {
        this.props.dispatch(setAuthUser(userObj));
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ activePath : this.props.location.pathname })
    }
  }

  handleLogout = () => {
    this.props.dispatch(removeAuthUser());
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <NavBar handleLogout={this.handleLogout} activePath={this.state.activePath} />
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/add" component={AddQuestion} />
          <PrivateRoute path="/leaderboard" component={Leaderboard} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/question/:id" component={Question} />
          <PrivateRoute path="/result/:id" component={Result} />
          <Route component={DefaultComponent} />
        </Switch>
      </div>
    );
  }
}

export default connect()(withRouter(App));