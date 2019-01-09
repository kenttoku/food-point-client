import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <p>
        Logged In:
        {' '}
        {localStorage.getItem('authToken') ? 'true' : 'false'}
        <button type="button" href="#" onClick={() => localStorage.removeItem('authToken')}>Logout</button>
      </p>
    );
  }
}

export default Dashboard;
