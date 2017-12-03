import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../ducks/actions/auth";

export const LoginView = ({ startLogin }) => (
  <div>
    <h1>Login Page View</h1>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginView);
