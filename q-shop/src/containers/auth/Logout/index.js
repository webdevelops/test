import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../../store/actions/authActions';

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
  });

  return (
    <Redirect to="/" />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

Logout.propTypes = {
  logout: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Logout);