/* $ global */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

export class Header extends Component {
  state = {
    navIsVisible: false
  }

  triggerNavigation = (e) => {
    e.preventDefault();
    this.setState = {
      navIsVisible : !this.state.navIsVisible
    }
  }

  logout = () => {
    this.props.actions.logout(this.props.location.pathname);
  }

  componentDidMount() {
    $('.ui.dropdown').dropdown({
      on: 'hover'
    });
  }

  render() {
    const navIsVisible = this.state.navIsVisible ? 'nav-is-visible' : '';
    const username = this.props.fullname ? this.props.fullname : this.props.username;
    return (
      <div className="main-header">
        <div className="ui text inverted menu">
          <div className="header inverted item">
          Logo
          </div>
          <div className="ui right dropdown item">
            {username}
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item">Mi Cuenta</div>
              <div className="item" onClick={this.logout}>Salir</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticating: state.auth.isAuthenticating,
  statusText: state.auth.statusText,
  error: state.auth.error,
  username: state.auth.username,
  fullname: state.auth.fullname
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
