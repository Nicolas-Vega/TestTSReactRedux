import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Header extends React.PureComponent {

  render () {
    return (<>Test</>);
  };
}

Header.propTypes = {
  backButton: PropTypes.any,
};

export default withRouter(
  connect(
    state => ({
      user: state,
    }),
    {}
  )(Header)
);