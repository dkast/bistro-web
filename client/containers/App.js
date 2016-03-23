import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class App extends Component {

  handleChange = (nextValue) => {
    browserHistory.push(`/${nextValue}`);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="full-height">
        {children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
  return ownProps;
}

export default connect(mapStateToProps, {
  //
})(App);
