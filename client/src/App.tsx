import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import CreateAccount from './components/Account/CreateAccount';

const App = () => (
  <Router>
    <Route path="/login" exact component={Join} />
    <Route path="/chat" component={Chat} />
    <Route path="/account/create" component={CreateAccount} />
  </Router>
);

export default App;
