import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import SignupContent from '../components/SignupContent';

export default class Signup extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <SignupContent/>
      </div>
    );
  }
}

