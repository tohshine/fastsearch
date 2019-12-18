import React, { useEffect } from 'react';

import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadUser } from '../action/authAction';

const PrivateRoute = ({ component: Component, auth, loadUser, ...rest }) => {
  const { loading, isAuth,user,token } = auth;
  
   
  return (
    <Route
      {...rest}
      render={props =>
        !isAuth && !loading ? (
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

export default connect(mapStateToProps, { loadUser })(PrivateRoute);
