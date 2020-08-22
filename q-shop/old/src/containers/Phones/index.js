import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './styles';
import PhoneCard from '../../components/PhoneCard';
import BasketCart from '../../components/BasketCart';
import Search from '../../components/Search';
import { fetchPhones, loadMorePhones, fetchCategories } from '../../store/actions/phonesActions';
import { getPhones } from '../../selectors';
import Categories from '../../components/Categories';
import Spinner from '../../components/Spinner';

const Phones = ({ 
  fetchPhones, 
  phones, 
  loadMorePhones,
  fetchCategories, 
  categories,
  loading
}) => {
  const classes = useStyles();

  useEffect(() => {
    fetchPhones();
    fetchCategories();
  }, [fetchPhones, fetchCategories]);

  const renderPhone = (phone, index) => {
    return (
      <Grid item xs={10} sm={6} md={6} lg={4} key={index} className={classes.card}>
        <PhoneCard phone={phone} />
      </Grid>
    );
  };

  const handleLoadMore = () => loadMorePhones();

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={classes.root}>
      <Grid container justify="space-between">
        <Grid container item md={4} lg={3} className={classes.sidebar}>
          <BasketCart />
          <Search />
          <Categories categories={categories} />
        </Grid>

        <Fragment>
          <Grid container item md={8} lg={9} spacing={4} className={classes.content}>
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

const mapStateToProps = (state, ownProps) => {
  return {
    phones: getPhones(state, ownProps),
    categories: state.categories,
    loading: state.phonesPage.loading
  };
};

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  fetchCategories
};

Phones.propTypes = {
  fetchPhones: PropTypes.func,
  phones: PropTypes.arrayOf(PropTypes.object),
  loadMorePhones: PropTypes.func,
  fetchCategories: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones)