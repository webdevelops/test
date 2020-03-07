import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

import useStyles from './styles';
import BasketTable from './BasketTable';
import { getBasketPhonesWithCount, getTotalBasketPrice } from '../../selectors';
import { handleDeletePhone, handleCheckout, handleCleanBasket } from '../../store/actions/phonesActions';

const Basket = ({ 
  phones, 
  totalBasketPrice, 
  handleDeletePhone, 
  handleCheckout, 
  handleCleanBasket 
}) => {

  const classes = useStyles();

  const emptyCart = (
    <Typography variant="h4">
      Your shopping cart is empty.
    </Typography>
  );

  const totalPrice = (
    <div className={classes.totalPrice}>
      <b>Total:</b>${totalBasketPrice}
    </div>
  );

  const additionalActions = (
    <Fragment>
      <Button
        fullWidth
        startIcon={<DeleteForeverOutlinedIcon />}
        className={classes.cleanBasket}
        onClick={handleCleanBasket}
      >
        Clean basket
      </Button>
      <Button
        fullWidth
        startIcon={<MailOutlineOutlinedIcon />}
        className={classes.checkout}
        onClick={handleCheckout(phones)}
      >
        Checkout
      </Button>
    </Fragment>
  )

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={9}>
          {(phones.length === 0) && emptyCart}
          <BasketTable phones={phones} handleDeletePhone={handleDeletePhone} />
          {(phones.length > 0) && totalPrice}
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Link to="/" className={classes.continueShopping}>
            <Button fullWidth startIcon={<InfoOutlinedIcon />}>
              Continue shopping!
            </Button>
          </Link>

          {(phones.length > 0) && additionalActions}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalBasketPrice: getTotalBasketPrice(state)
  }
}

const mapDispatchToProps = {
  handleDeletePhone,
  handleCleanBasket,
  handleCheckout
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);