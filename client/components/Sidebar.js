import React, { Component } from 'react';
import { BarChartIcon } from './icons';

export default class Sidebar extends Component {
  render() {
    return (
      <main className="main-content">
        <nav className="side-nav">
          <ul>
            <li className="label">Menu</li>
            <li>
              <a href="#0" className="active">
                <BarChartIcon/>
                Inicio
              </a>
            </li>
            <li>
              <a href="#0">Articulos</a>
            </li>
          </ul>
        </nav>
      </main>
    );
  }
}
