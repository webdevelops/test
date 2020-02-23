import '../auth.sass';

import React, { useState } from 'react';
import useStyles from '../useStyles';
import { Typography, TextField, Paper, Button, Grid } from '@material-ui/core';
import { validateControl } from '../../../store/actions';
import { Link } from 'react-router-dom';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';

const SignUp = () => {
  const classes = useStyles();

  const [formControls, setFormControls] = useState({
    email: {
      type: "email",
      label: "Email",
      value: "",
      valid: false,
      touched: false,
      errorMessage: "Enter correct email.",
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
      errorMessage: "At least 6 characters.",
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
    const newFormControls = { ...formControls };
    const control = newFormControls[controlName];

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(
      control.value,
      control.validation,
      formControls.password.value
    );

    setFormControls(newFormControls);
  }

  const header = (
    <div className="form__header" /* className={classes.header} */>
      <Typography variant="h4" color="secondary">
        Sign In
      </Typography>
      <Typography variant="h4" color="primary">
        Sign Up
      </Typography>
    </div>
  );

  const renderFormControls = () => {
    return (
      Object.keys(formControls).map((controlName, index) => {
        const control = formControls[controlName];
        const isInvalid = !control.valid && control.touched;
        const helperText = isInvalid
          ? control.errorMessage || "Incorrect entry."
          : "";

        let icon = null;

        switch (controlName) {
          case 'email':
            icon = <DraftsTwoToneIcon fontSize="small" />
            break;

          case 'password':
            icon = <VpnKeyTwoToneIcon fontSize="small" />
            break;
            
          case 'verifyPassword':
            icon = <LockOpenTwoToneIcon fontSize="small" />
            break;

          default:
            icon = null;
        }

        return (
          <Grid container key={index}>
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

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <form className="form" /* className={classes.form} */>

          {header}

          {renderFormControls()}

          <Button variant="contained" color="primary">
            Sign Up
          </Button>

          <Link to="/sign-up" className="form__link form__link_policy">
            Privacy Policy
          </Link>

          <Link to="/" className="form__link form__link_cancel">
            Cancel
          </Link>

        </form>
      </Paper>
    </div>
  );
}

export default SignUp