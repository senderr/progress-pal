import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage-component';
import CoursePage from './pages/course-component';

import { Header } from './component/header';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/c" component={CoursePage} />
      </Switch>
    </div>
  );
};

export default App;
