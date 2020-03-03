import React, { useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { fetchPhoneById, addPhoneToBasket } from '../../store/actions/phonesActions';
import { getPhoneById } from '../../selectors';
import BasketCart from '../../components/BasketCart';

const Phone = ({ fetchPhoneById, match, phone, addPhoneToBasket }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchPhoneById(match.params.id);
  }, [fetchPhoneById, match.params.id]);

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
            {field}:
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
      <Card raised className={classes.card}>
        <CardContent>
          <Grid container className={classes.info}>
            <Grid item md={6}>
              <CardMedia
                component="img"
                src={phone.image}
                alt={phone.name}
                className={classes.image}
              />
            </Grid>

            <Grid item md={6}>
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

  const handleAddPhoneToBasket = id => event => addPhoneToBasket(id);

  const renderSidebar = () => {
    return (
      <div>
        <Typography gutterBottom variant="h5">
          Quick Shop
          </Typography>

        <BasketCart />

        <Typography variant="h4" className={classes.titleSidebar} >
          {phone.name}
        </Typography>
        <Typography gutterBottom variant="h4">
          ${phone.price}
        </Typography>

        <Link to="/" className={classes.backToStore}>
          <Button variant="contained" fullWidth>
            Back to store
          </Button>
        </Link>

        <Button
          className={classes.addToBasket}
          variant="contained"
          fullWidth
          onClick={handleAddPhoneToBasket(phone.id)}
        >
          Add to cart
        </Button>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          {phone && renderPhone()}
        </Grid>

        <Grid item xs={12} md={3}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Phone);