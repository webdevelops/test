import React from 'react';
import { FormControl, FormControlLabel, Switch } from '@material-ui/core';
import PropTypes from 'prop-types';

const ToggleSwitch = ({ signIn, handleChange }) => {
  return (
    <FormControl>
      <FormControlLabel
        control={<Switch checked={signIn} onChange={handleChange} aria-label='login switch' />}
        label={signIn ? 'Logout' : 'Login'}
      />
    </FormControl>
  );
}

ToggleSwitch.propTypes = {
  signIn: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default ToggleSwitch;