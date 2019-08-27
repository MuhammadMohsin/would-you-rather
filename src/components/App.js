import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import DefaultComponent from './404Page';
import Login from './Login';
import Home from './Home';
import Leaderboard from './Leaderboard';
import AddQuestion from './AddQuestion';
import ViewQuestions from './ViewQuestions.js';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/1" exact component={Home} />
          <Route path="/add" component={AddQuestion} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/" exact component={Login} />
          <Route path="/questions/:id" component={ViewQuestions} />
          <Route component={DefaultComponent} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);