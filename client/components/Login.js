import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

export default class Login extends Component {
  constructor(props) {
    super(props);
    const redirectRoute = this.props.location.query.next || '/login';
    this.state = {
      username: '',
      password: '',
      redirectTo: redirectRoute
    }
  }

  login = (e) => {
    this.props.actions.loginUser(this.sate.username, this.state.password, this.state.redirectTo)
  }

  render() {
    return (
      <div id="login" className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui blue center aligned icon header">
            <i className="food icon"></i>
            Bistro
          </h2>
          <div className="ui large form">
            <div className="ui raised segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text"
                         name="username"
                         placeholder="Usuario"
                         value={this.state.username}
                         onChange={this.handleUsernameChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password"
                         name="password"
                         placeholder="Contraseña"
                         value={this.state.password}
                         onChange={this.handlepasswordChange}
                  />
                </div>
              </div>
              <div className="ui fluid large blue submit button">Log in</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
