import React from 'react';
import { connect, bindActionCreators } from 'react-redux';
import { push } from 'react-router-redux';

export function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount () {
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(this.props.isAuthenticated);
    }

    checkAuth = (isAuthenticated) => {
      if (!isAuthenticated) {
        const redirectAfertLogin = this.props.location.pathname;
        this.props.dispatch(push(`/login?next=${redirectAfertLogin}`));
      }
    }

    render() {
      return (
        <div>
          {this.props.isAuthenticated === true
            ? <Component {...this.props} />
          : null
          }
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({
    token: state.auth.token,
    username: state.auth.username,
    isAuthenticated: state.auth.isAuthenticated
  });

  // const mapDispatchToProps = (dispatch) => ({
  //   actions: bindActionCreators(routerActions, dispatch)
  // });

  return connect(mapStateToProps)(AuthenticatedComponent);
};
