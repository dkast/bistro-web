import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
import VelocityHelpers from 'velocity-react/velocity-helpers';
import VelocityComponent from 'velocity-react/velocity-component';

const Animations = {
  In: VelocityHelpers.registerEffect({
    calls: [
      [{
        opacity: 1,
        scale: 1
      }, 1, {
        easing: [ 150, 15 ]
      }]
    ],
  }),
  Out: VelocityHelpers.registerEffect({
    calls: [
      [{
        opacity: 0,
        scale: 0.75
      }, 1, {
        easing: 'ease-out'
      }]
    ],
  })
}

export class Login extends Component {
  constructor(props) {
    super(props);
    const redirectRoute = this.props.location.query.next || '/login';
    this.state = {
      username: '',
      password: '',
      redirectTo: redirectRoute,
      triggerError: true
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props.error) && (this.state.triggerError)) {
      this.refs.loginBox.runAnimation('stop');
      this.setState ({
        triggerError: false
      });
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  login = (event) => {
    event.preventDefault();
    this.setState({
      triggerError: true
    });
    this.props.actions.loginUserRequest(this.state.username, this.state.password, this.state.redirectTo)
  }

  render() {
    const error = this.props.error ? 'error' : '';
    const loading = this.props.isAuthenticating ? 'loading' : '';

    const enterAnimation = {
      animation: Animations.In,
      duration: 800,
    };

    const leaveAnimation = {
      animation: Animations.Out,
      duration: 200,
    }

    return (
      <VelocityComponent ref="loginBox" animation={'callout.shake'} duration={300}>
        <div id="login" className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui blue center aligned icon header">
              <i className="user icon"></i>
              {/*Bistro*/}
            </h2>
            <div className="ui large form">
              <div className="ui raised segment">
                <div className={`field ${error}`}>
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input name="user"
                           placeholder="Usuario"
                           value={this.state.username}
                           onChange={this.handleUsernameChange}
                    />
                  </div>
                </div>
                <div className={`field ${error}`}>
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password"
                           name="password"
                           placeholder="Contraseña"
                           value={this.state.password}
                           onChange={this.handlePasswordChange}
                    />
                  </div>
                </div>
                <button className={`ui fluid large blue ${loading} submit button`} onClick={this.login}>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </VelocityComponent>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticating: state.auth.isAuthenticating,
  statusText: state.auth.statusText,
  error: state.auth.error
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
