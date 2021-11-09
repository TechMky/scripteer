import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home';
import { AppProvider } from './context/AppContext';
import Login from './pages/Login';
import MainLayout from './layout/MainLayout';
import { BASE_URL, LOGIN_URL } from './urlLinks';

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <Router>
          <Switch>
            <Route path={LOGIN_URL}>
              <Login />
            </Route>
            <Route path={BASE_URL}>
              <Home />
            </Route>
          </Switch>
        </Router>
      </MainLayout>
    </AppProvider>
  );
}

export default App;
