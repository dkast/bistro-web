import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <a href="#0" className="logo">
          Logo
        </a>

        <a href="#0" className="nav-trigger">Menu<span></span></a>

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
        </nav>
    </div>
    );
  }
}
