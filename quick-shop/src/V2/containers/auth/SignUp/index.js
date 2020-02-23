import React, { useState } from 'react';
import useStyles from '../useStyles';
import { Typography, TextField, Button, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { validateControl } from '../../../selectors';

const SignUp = () => {
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
    verifyPassword: {
      type: "password",
      label: "Verify Password",
      value: "",
      valid: false,
      touched: false,
      errorMessage: "Enter correct password.",
      validation: {
        required: true,
        samePassword: true,
      },
    },
  });

  const handleChange = controlName => event => {
    const newFieldControls = { ...fieldControls };
    const control = newFieldControls[controlName];

    control.value = event.target.value;
    console.log("TCL: SignUp -> control.value", control.value)
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);

    setFieldControls(newFieldControls);
  }

  const renderFieldControls = () => {

    return (
      Object.keys(fieldControls).map((controlName, index) => {
        const control = fieldControls[controlName];
        const isInvalid = !control.valid && control.touched;
        const helperText = isInvalid
          ? control.errorMessage || "Incorrect entry."
          : '';

        return (
          <TextField
            key={index}
            id={controlName + index}
            type={control.type}
            label={control.label}
            value={control.value}
            error={isInvalid}
            helperText={helperText}
            className={classes.textField}
            onChange={handleChange(controlName)}
          />
        );
      })
    );
  }

  return (
    <div className={classes.root}>
      <Paper elevation={5}>
        <form className={classes.form}>

          <div className={classes.header}>
            <Typography variant="h4" color="secondary">
              Sign In
            </Typography>
            <Typography variant="h4" color="primary">
              Sign Up
            </Typography>
          </div>

          {renderFieldControls()}

          <Button variant="contained" color="primary" className={classes.button} >
              Sign In
          </Button>

          <Link to="sign-up" className={classes.privacyPolicy} >
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

export default SignUp