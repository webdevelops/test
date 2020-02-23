import React from 'react'
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';

const ToggleSwitch = ({ signUp, handleChange }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={signUp} onChange={handleChange} aria-label='login switch' />}
        label={signUp ? 'Logout' : 'Login'}
      />
    </FormGroup>
  );
}

export default ToggleSwitch;