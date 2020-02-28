
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import useStyles from './styles';
import { fetchPhones } from '../../store/actions/phonesActions';
import PhoneCard from '../../components/PhoneCard';

const Phones = ({ fetchPhones, phones }) => {
  const classes = useStyles();
  console.log("TCL: Phones -> classes", classes)

  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);

  const renderPhone = (phone, index) => {
    return (
      <Grid item xs={10} sm={6} md={4} className={classes.phoneCard} key={index}>
        <PhoneCard phone={phone} />
      </Grid>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item lg={3} className={classes.sidebar}>
          Sidebar
        </Grid>

        <Grid container item lg={9} spacing={5} className={classes.content}>
          {phones.map((phone, index) => renderPhone(phone, index))}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    phones: state.phones
  }
}

const mapDispatchToProps = {
  fetchPhones
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones)