import React, { Component } from 'react';

import TopBar from '../components/TopBar';
import LoginContent from '../components/LoginContent';

export default class Login extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <LoginContent/>
      </div>
    );
  }
}

