import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../ducks/actions/auth";

export const LoginView = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Barely Teaching</h1>
      <p>The app to get you organized...or not.</p>
      <button className="login-button" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginView);
