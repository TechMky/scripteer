import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home';
import { UserProvider } from './context/UserContext';
import Login from './pages/Login';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <UserProvider>
      <MainLayout>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </MainLayout>
    </UserProvider>
  );
}

export default App;
