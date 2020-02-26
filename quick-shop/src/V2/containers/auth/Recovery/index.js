import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';

import useStyles from '../authStyles';
import { validateControl } from '../../../selectors';

const Recovery = () => {
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
  });

  const handleChange = controlName => event => {
    const newFieldControls = { ...fieldControls };
    const control = newFieldControls[controlName];

    control.value = event.target.value;
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
          <Grid key={index} container className={classes.controlField}>
            <Grid item>
              <DraftsTwoToneIcon fontSize="small" />
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
      <Paper elevation={5}>
        <form className={classes.form}>

          <div className={classes.header}>
            <Typography variant="h4" color="primary">
              Recovery
            </Typography>
          </div>

          {renderFieldControls()}

          <Button variant="contained" color="primary" className={classes.recovery} >
            Recovery
          </Button>

          <Link to="/" className={classes.cancel} >
            Cancel
          </Link>

        </form>
      </Paper>
    </div>
  );
}

export default Recovery