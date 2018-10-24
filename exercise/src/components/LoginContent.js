import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class LoginContent extends Component {
  render() {
    return (
      <div className="jumbotron">
	      <div className="container">
				<div className="col-md-6 col-md-offset-3">
		          <h2>Login</h2>
		          <form name="form">
		              <div className={'form-group'}>
		                  <label htmlFor="username">Username</label>
		                  <input type="text" className="form-control" name="username" value="" />
		              </div>
		              <div className={'form-group'}>
		                  <label htmlFor="password">Password</label>
		                  <input type="password" className="form-control" name="password" value="" />
		              </div>
		              <div className="form-group">
		                  <Link to="/login" className="btn btn-primary">Login</Link>
		                  <Link to="/signup" className="btn btn-link">Signup</Link>
		              </div>
		          </form>
		      </div>
	      </div>
      </div>
    );
  }
}
