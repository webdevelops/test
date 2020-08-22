import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useStyles from './styles';
import { fetchPhoneById, addPhoneToBasket } from '../../store/actions/phonesActions';
import { getPhoneById } from '../../selectors';
import BasketCart from '../../components/BasketCart';
import Spinner from '../../components/Spinner';

const Phone = ({ 
  fetchPhoneById, 
  match, 
  phone, 
  addPhoneToBasket, 
}) => {

  const classes = useStyles();

  useEffect(() => {
    fetchPhoneById(match.params.id);
  });

  const renderFields = () => {
    const fields = Object.keys(phone).filter(key => (
      key === 'cpu' ||
      key === 'size' ||
      key === 'weight' ||
      key === 'display' ||
      key === 'memory' ||
      key === 'battery'
    ));

    return (
      fields.map(field => (
        <div className={classes.field} key={field}>
          <Typography variant="h6">
            {field}
          </Typography>
          <Typography variant="body2">
            {phone[field]}
          </Typography>
        </div>
      ))
    );
  };

  const renderPhone = () => {
    return (
      <Card raised >
        <CardContent>
          <Grid container className={classes.info}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                src={phone.image}
                alt={phone.name}
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.fields}>
              {renderFields()}
            </Grid>
          </Grid>

          <div className={classes.title}>
            <Typography gutterBottom variant="h4">
              {phone.name}
            </Typography>
            <span>${phone.price}</span>
          </div>

          <Typography variant="body1">
            {phone.description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const handleAddPhoneToBasket = id => () => addPhoneToBasket(id);

  const renderSidebar = () => {
    return (
      <div>
        <Typography gutterBottom variant="h5">
          Quick Shop
        </Typography>

        <BasketCart />

        <Typography variant="h4" className={classes.sidebarTitle}>
          {phone.name}
        </Typography>
        <Typography variant="h4">
          ${phone.price}
        </Typography>

        <Link to="/" className={classes.backToStore}>
          <Button variant="contained" fullWidth>
            Back to Store
          </Button>
        </Link>

        <Button
          variant="contained"
          className={classes.addToBasket}
          fullWidth
          onClick={handleAddPhoneToBasket(phone.id)}
        >
          Add to Cart
        </Button>
      </div>
    );
  };

  if (!phone) {
    return <Spinner />;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8} lg={9} className={classes.contect}>
          {phone && renderPhone()}
        </Grid>

        <Grid item xs={12} md={4} lg={3} className={classes.sidebar}>
          {phone && renderSidebar()}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  };
};

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket
}

Phone.propTypes = {
  fetchPhoneById: PropTypes.func,
  match: PropTypes.object,
  phone: PropTypes.object,
  addPhoneToBasket: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);