import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';
import { connect } from 'react-redux';

import useStyles from '../authStyles';
import { validateControl } from '../../../selectors';
import { auth } from '../../../store/actions/authActions';

const SignIn = ({ auth }) => {
  const classes = useStyles();

  const [fieldControls, setFieldControls] = useState({
    email: {
      type: "email",
      label: "Email",
      value: "",
      valid: false,
      touched: false,
      errorMessage: "Enter correct email",
      validation: {
        required: true,
        email: true,
      },
    },
    password: {
      type: "password",
      label: "Password",
      value: "",
      valid: false,
      touched: false,
      errorMessage: "At least 6 characters",
      validation: {
        required: true,
        minLength: 6,
      },
    },
  });

  const handleChange = controlName => event => {
    const newFieldControls = { ...fieldControls };
    const control = newFieldControls[controlName];

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);

    setFieldControls(newFieldControls);
  }

  const header = (
    <div className={classes.header}>
      <Typography variant="h4" color="primary">
        Sign In
      </Typography>
      <Typography variant="h4" color="secondary">
        Sign Up
      </Typography>
    </div>
  )

  const renderFieldControls = () => {

    return (
      Object.keys(fieldControls).map((controlName, index) => {
        const control = fieldControls[controlName];
        const isInvalid = !control.valid && control.touched;
        const helperText = isInvalid
          ? control.errorMessage || "Incorrect entry."
          : '';

        let icon = null;

        switch (controlName) {
          case 'email':
            icon = <DraftsTwoToneIcon fontSize="small" />;
            break;

          case 'password':
            icon = <VpnKeyTwoToneIcon fontSize="small" />;
            break;

          default:
            icon = null;
        }

        return (
          <Grid key={index} container className={classes.controlField}>
            <Grid item>
              {icon}
            </Grid>
            <Grid item>
              <TextField
                id={controlName + index}
                type={control.type}
                label={control.label}
                value={control.value}
                error={isInvalid}
                helperText={helperText}
                className={classes.textField}
                onChange={handleChange(controlName)}
              />
            </Grid>
          </Grid>
        );
      })
    );
  }

  const handleClickSignIn = () => auth(
    fieldControls.email.value,
    fieldControls.password.value,
    true
  );

  return (
    <div className={classes.root}>
      <Paper elevation={5}>
        <form className={classes.form}>

          {header}

          {renderFieldControls()}

          <Link to="/recovery" className={classes.forgotPassword} >
            Forgot password?
          </Link>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClickSignIn}
          >
            Sign In
          </Button>

          <Link to="sign-in" className={classes.privacyPolicy} >
            Privacy Policy
          </Link>

          <Link to="/" className={classes.cancel} >
            Cancel
          </Link>

        </form>
      </Paper>
    </div>
  );
}

const mapDispatchToProps = {
  auth
};

export default connect(null, mapDispatchToProps)(SignIn)