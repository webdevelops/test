import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { getTotalBasketCount, getTotalBasketPrice } from '../../selectors';

const useStyles = makeStyles({
  root: {
    textDecoration: "none",
    width: "100%",
    display: "block",
    '& button': {
      height: 40,
      textTransform: "none",
    },
  },
});

const BasketCart = ({ totalBasketCount, totalBasketPrice }) => {
  const classes = useStyles();

  return (
    <Link to="/basket" className={classes.root} >
      <Button variant="contained" color="primary" fullWidth startIcon={<ShoppingCartIcon/>}>
        {totalBasketCount} item(s) - ${totalBasketPrice}
      </Button>
    </Link>
  );
};

const mapStateToPorps = state => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalBasketPrice: getTotalBasketPrice(state)
  };
};

export default connect(mapStateToPorps)(BasketCart);