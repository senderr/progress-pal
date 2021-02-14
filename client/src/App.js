import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/HomePage/HomePage';
import CoursePage from './pages/CoursePage/CoursePage';
import AuthPage from './pages/AuthPage/AuthPage';

import { Nav } from './components/nav-component';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers = {
  'Content-Type': 'application/json',
};
if (localStorage.progressPalToken) {
  axios.defaults.headers.common['x-auth-token'] = localStorage.progressPalToken;
}

const App = () => {
  const [auth, setAuth] = useState(0);
  const [user, setUser] = useState();

  useEffect(() => {
    if (!user) {
      axios
        .get('/auth')
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [auth, user]);

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            user ? <HomePage /> : <AuthPage updateAuth={setAuth} />
          }
        />
        <Route path="/c" component={CoursePage} />
        <Route path="/home" component={HomePage} />

        {/*  */}
      </Switch>
    </div>
  );
};

export default App;
