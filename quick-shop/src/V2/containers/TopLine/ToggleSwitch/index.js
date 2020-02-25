import React from 'react'
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';

export default function ToggleSwitch({ signIn, handleChange}) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={signIn} onChange={handleChange} aria-label='login switch' />}
        label={signIn ? 'Logout' : 'Login'}
      />
    </FormGroup>
  );
}