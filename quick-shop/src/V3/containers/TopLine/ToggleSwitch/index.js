import React from 'react'
import { FormControl, FormControlLabel, Switch } from '@material-ui/core'

const ToggleSwitch = ({ signIn, handleChange }) => {
  return (
    <FormControl>
      <FormControlLabel
        control={<Switch checked={signIn} onChange={handleChange} aria-label='login switch' />}
        label={signIn ? 'Logout' : 'Login'}
      />
    </FormControl>
  )
}

export default ToggleSwitch