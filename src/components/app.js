import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Nav from './nav';
import Search from './search';
import Weather from './weather';
import FallBack from './fallback';

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/:query" component={Weather} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
