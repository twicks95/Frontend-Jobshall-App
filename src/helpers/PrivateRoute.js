import React from "react";
import { Route, Redirect } from "react-router-dom";

// import { connect } from "react-redux";

// ...rest berisikan path dan exact
const PrivateRoute = ({ component: Component, author, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return (
    <Route
      {...rest}
      render={
        (props) =>
          isAuthenticated && role === author ? (
            <Component {...props} />
          ) : isAuthenticated && !role === author ? (
            <Redirect to="/" />
          ) : (
            <Redirect to="/login" />
          )
        // console.log(props)
      }
    />
  );
};

// const mapStateToProps = (state) => ({ auth: state.auth });

// export default connect(mapStateToProps, null)(PrivateRoute);
export default PrivateRoute;
