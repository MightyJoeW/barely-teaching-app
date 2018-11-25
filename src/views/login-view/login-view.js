// EXTERNAL DEPENDENCIES
import React from "react";
import { connect } from "react-redux";

// INTERNAL DEPENDENCIES
import { startLogin } from "../../redux/actions/auth";
// import "./login-view.scss";

export const LoginView = ({ startLogin }) => (
  <div className="login-wrapper">
    <div className="login-cover">
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="login__title">Barely Teaching</h1>
          <p>The #1 App for Teachers After Hours</p>
          <button className="login-button" onClick={startLogin}>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginView);
