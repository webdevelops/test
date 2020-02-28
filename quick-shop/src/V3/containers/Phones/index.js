
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import useStyles from './styles';
import { fetchPhones } from '../../store/actions/phonesActions';
import PhoneCard from '../../components/PhoneCard';

const Phones = ({ fetchPhones, phones }) => {
  const classes = useStyles();
  
  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);

  const renderPhone = (phone, index) => {
    return (
      <Grid item xs={10} sm={6} md={4} key={index} className={classes.card}>
        <PhoneCard phone={phone} />
      </Grid>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container justify="space-between">
        <Grid container item lg={3} className={classes.sidebar}>
          Sidebar
        </Grid>

        <Grid container item lg={9} spacing={4} className={classes.content}>
          {phones.map((phone, index) => renderPhone(phone, index))}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    phones: state.phones
  };
};

const mapDispatchToProps = {
  fetchPhones
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones)