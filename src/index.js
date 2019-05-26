import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Nav from './components/nav';
import Search from './components/search';
import Weather from './components/weather';
import Fallback from './components/fallback';
import './style.scss';

const App = (props) => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/:query" component={Weather} />
        <Route component={Fallback} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
