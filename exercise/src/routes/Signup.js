import React, { Component } from 'react';

import TopBar from '../components/TopBar';
import HomeContent from '../components/HomeContent';

export default class Signup extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <HomeContent/>
      </div>
    );
  }
}

