// EXTERNAL DEPENDENCIES
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

// INTERNAL DEPENDENCIES
import Header from "../components/header";

// LOCAL VARIABLES
const subTitle = `The #1 App for Teachers After Hours`;

// COMPONENT DEFINITION
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Fragment>
          <Header subTitle={subTitle} />
          <Component {...props} />
        </Fragment>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
