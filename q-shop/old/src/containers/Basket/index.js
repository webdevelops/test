import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import PropTypes from 'prop-types';

import useStyles from './styles';
import BasketTable from './BasketTable';
import { getBasketPhonesWithCount, getTotalBasketPrice } from '../../selectors';
import { handleRemovePhone, handleCleanBasket, handleCheckout } from '../../store/actions/phonesActions';

const Basket = ({
  phones,
  totalBasketPrice,
  handleRemovePhone,
  handleCleanBasket,
  handleCheckout
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
        Clean Basket
      </Button>
      <Button
        fullWidth
        startIcon={<MailOutlineTwoToneIcon />}
        className={classes.checkout}
        onClick={handleCheckout(phones)}
      >
        Checkout
      </Button>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={9}>
          {(phones.length === 0) && emptyCart}
          <BasketTable phones={phones} handleRemovePhone={handleRemovePhone} />
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
  };
};

const mapDispatchToProps = {
  handleRemovePhone,
  handleCleanBasket,
  handleCheckout
};

Basket.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object),
  totalBasketPrice: PropTypes.number,
  handleRemovePhone: PropTypes.func,
  handleCleanBasket: PropTypes.func,
  handleCheckout: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);