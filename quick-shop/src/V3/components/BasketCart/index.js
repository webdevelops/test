import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { getTotalBasketCount, getTotalBasketPrice } from '../../selectors';

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    width: "100%",
    '& button': {
      textTransform: "none",
    },
  },
});

const BasketCart = ({ totalBasketCount, totalBasketPrice }) => {
  const classes = useStyles();

  return (
    <Link to="/basket" className={classes.link}>
      <Button startIcon={<ShoppingCartIcon/>} variant="contained" color="primary" fullWidth>
        {totalBasketCount} item(s) - $ {totalBasketPrice}
      </Button>
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalBasketPrice: getTotalBasketPrice(state)
  };
};

export default connect(mapStateToProps)(BasketCart);