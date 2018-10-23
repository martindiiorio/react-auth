import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
export default class SignupContent extends Component {
  render() {
    return (
      <div>
			<div className="col-md-6 col-md-offset-3">
	          <h2>Signup</h2>
	          <form name="form">
	              <div className={'form-group'}>
	                  <label htmlFor="username">Firstname</label>
	                  <input type="text" className="form-control" name="firstname" value="" />
	              </div>
	              <div className={'form-group'}>
	                  <label htmlFor="username">Lastname</label>
	                  <input type="text" className="form-control" name="lastname" value="" />
	              </div>
	              <div className={'form-group'}>
	                  <label htmlFor="username">Username</label>
	                  <input type="text" className="form-control" name="username" value="" />
	              </div>
	              <div className={'form-group'}>
	                  <label htmlFor="password">Password</label>
	                  <input type="password" className="form-control" name="password" value="" />
	              </div>
	              <div className="form-group">
	                  <Link to="/signup" className="btn btn-link">Signup</Link>
	                  <Link to="/login" className="btn btn-primary">Cancel</Link>
	              </div>
	          </form>
	      </div>
      </div>
    );
  }
}
