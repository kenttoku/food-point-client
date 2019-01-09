import React from 'react';
import Login from '../Login';
import Signup from '../Signup';
import Dashboard from '../Dashboard';

const App = () => (
  <>
    <h1>Authentication Template</h1>
    <h2>Signup</h2>
    <Signup />
    <h2>Login</h2>
    <Login />
    <h2>Content</h2>
    <Dashboard />
  </>
);

export default App;
