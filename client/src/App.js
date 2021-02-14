import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage-component';
import CoursePage from './pages/course-component';

import { Nav } from './component/nav-component';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/c" component={CoursePage} />
      </Switch>
    </div>
  );
};

export default App;
