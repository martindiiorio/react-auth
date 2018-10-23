import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
export default class HomeContent extends Component {
  render() {
    return (
      <div>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
      </div>
    );
  }
}
