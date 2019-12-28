import React, { useEffect } from 'react';

import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadUser, setLoading } from '../action/authAction';

const PrivateRoute = ({
  component: Component,
  auth,
  loadUser,
  setLoading,
  ...rest
}) => {
  const { loading, isAuth, user, token } = auth;
  useEffect(() => {
    setLoading();
    loadUser();
    return () => {};
  }, []);

  if (user === null && loading) return <p>loading...</p>;
  if (user === null && !loading) return <Redirect to="/" />;

  return (
    <Route
      {...rest}
      render={props =>
        !user.isAuthenticated && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loadUser, setLoading })(PrivateRoute);
