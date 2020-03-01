/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import useStyles from './styles';
import { fetchPhoneById } from '../../store/actions/phonesActions';
import { getPhoneById } from '../../selectors';

const Phone = ({ fetchPhoneById, match, phone }) => {
  console.log("Phone -> phone", phone)
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
      <Card raised /* variant="outlined" */>
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
            <Grid item xs={12} md={6}>
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

  const renderSidebar = () => {
    return (
      <div>Sidebar</div>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={9} className={classes.contect}>
          {phone && renderPhone()}
        </Grid>

        <Grid item xs={12} md={3} className={classes.sidebar}>
          {renderSidebar()}
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
  fetchPhoneById
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone);