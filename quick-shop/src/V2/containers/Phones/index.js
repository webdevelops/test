
import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';

import useStyles from './styles';
import PhoneCard from '../../components/PhoneCard';
import BasketCart from '../../components/BasketCart';
import { fetchPhones, loadMorePhones } from '../../store/actions/phonesActions';

const Phones = ({ fetchPhones, phones, loadMorePhones }) => {
  const classes = useStyles();

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

  const handleLoadMore = () => loadMorePhones();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item lg={3} className={classes.sidebar}>
          <BasketCart />
        </Grid>

        <Fragment>
          <Grid container item lg={9} spacing={3} className={classes.content}>
            {phones.map((phone, index) => renderPhone(phone, index))}
          </Grid>

          <div className={classes.loadMore}>
            <Button variant="contained" color="primary" onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        </Fragment>
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
  fetchPhones,
  loadMorePhones
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones)