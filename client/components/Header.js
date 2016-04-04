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
    this.props.actions.logoutAndRedirect();
  }

  componentDidMount() {
    $('.ui.dropdown').dropdown({
      on: 'hover'
    });
  }

  render() {
    const navIsVisible = this.state.navIsVisible ? 'nav-is-visible' : '';
    return (
      <div className="main-header">
        {/*<a href="#0" className="logo">
          Logo
        </a>

        <a href="#0" className={`nav-trigger ${navIsVisible}`} onClick={this.triggerNavigation}>Menu<span></span></a>

        <nav className="nav">
          <ul className="top-nav">
            <li>
              <a href="#0">Pruebas</a>
            </li>
            <li className="has-children account">
              <a href="#0">Cuenta</a>
              <ul>
                <li>
                  <a href="#0">Mi Cuenta</a>
                </li>
                <li>
                  <a href="#0">Salir</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>*/}
        <div className="ui text inverted menu">
          <div className="header inverted item">
            Logo
          </div>
          <div className="ui right dropdown item">
            Cuenta
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
  error: state.auth.error
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
