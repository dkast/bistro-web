import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <Header location={this.props.location} />
        <Sidebar />
        <div className="content-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}
