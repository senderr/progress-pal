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

const App = () => {
  const [auth, setAuth] = useState(0);
  const [user, setUser] = useState();

  useEffect(() => {
    if (!user) {
      if (localStorage.progressPalToken) {
        axios.defaults.headers['x-auth-token'] = localStorage.progressPalToken;
      }
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
        <Route path="/c" render={() => <CoursePage user={user} />} />
        <Route path="/home" render={() => <HomePage user={user} />} />

        {/*  */}
      </Switch>
    </div>
  );
};

export default App;
