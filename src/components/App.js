import React from 'react';
import { Route, Switch } from 'react-router-dom'
import DefaultComponent from './404Page';
import Login from './Login';
import Home from './Home';
import Leaderboard from './Leaderboard';
import AddQuestion from './AddQuestion';
import ViewQuestions from './ViewQuestions.js';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddQuestion} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/questions/:id" component={ViewQuestions} />
        <Route component={DefaultComponent} />
      </Switch>
    </div>
  );
}

export default App;
