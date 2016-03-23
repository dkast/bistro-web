import React, { Component } from 'react';

export default class Login extends Component {
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
                  <input type="text"  name="username" placeholder="Username"/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password"/>
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
