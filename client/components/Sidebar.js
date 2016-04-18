import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Sidebar extends Component {
  render() {
    return (
      <main className="main-content">
        <nav className="side-nav">
          <ul>
            <li className="label">Menu</li>
            <li>
              <IndexLink to="/" activeClassName="active">Inicio</IndexLink>
            </li>
            <li>
              <Link to="/items" activeClassName="active">Articulos</Link>
            </li>
          </ul>
        </nav>
      </main>
    );
  }
}
