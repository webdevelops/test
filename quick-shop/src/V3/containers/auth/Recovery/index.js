
import React, { useState } from 'react';
import { Typography, TextField, Paper, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';

import '../auth.sass';
import useStyles from '../authStyles';
import { validateControl } from '../../../store/actions/authActions';

const Recovery = () => {
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
  });

  const handleChange = controlName => event => {
    const newFormControls = { ...formControls };
    const control = newFormControls[controlName];

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);

    setFormControls(newFormControls);
  }

  const renderFormControls = () => {
    return (
      Object.keys(formControls).map((controlName, index) => {
        const control = formControls[controlName];
        const isInvalid = !control.valid && control.touched;
        const helperText = isInvalid
          ? control.errorMessage || "Incorrect entry."
          : "";

        return (
          <Grid container className={classes.formControl}>
            <Grid item>
              <DraftsTwoToneIcon fontSize="small" />
            </Grid>
            <Grid item>
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
            </Grid>
          </Grid>
        );
      })
    );
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <form /* className="form form__recovery" */ className={classes.form}>

          <div /* className="form__header" */ className={classes.header}>
            <Typography variant="h4" color="primary">
              Recovery
            </Typography>
          </div>

          {renderFormControls()}

          <Button variant="contained" color="primary" className={classes.recovery}>
            Recovery
          </Button>

          <Link to="/" className="form__link form__link_cancel">
            Cancel
          </Link>

        </form>
      </Paper>
    </div>
  );
}

export default Recovery