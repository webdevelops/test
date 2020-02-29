import React, { useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import {connect} from 'react-redux';

import useStyles from './styles';
import { fetchPhoneById } from '../../store/actions/phonesActions';
import { getPhoneById } from '../../selectors';

const Phone = ({ fetchPhoneById, match, phone }) => {
  console.log("Phone -> phone", phone)
  const classes = useStyles();

  useEffect(() => {
    fetchPhoneById(match.params.id);
  }, [fetchPhoneById, match.params.id]);

  const renderPhone = () => {
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item md={6}>
              <CardMedia 
                component="img"
                src={phone.image}
                alt={phone.name}
              />
            </Grid>

            <Grid item md={6}>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item md={9}>
          {phone && renderPhone()}
        </Grid>

        <Grid container item md={3}>
          Sidebar
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