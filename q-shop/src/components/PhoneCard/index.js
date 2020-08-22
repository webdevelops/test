
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import useStyles from './styles';
import { addPhoneToBasket } from '../../store/actions/phonesActions';

const PhoneCard = ({ phone, addPhoneToBasket }) => {
  const classes = useStyles();
  const shortDescription = `${phone.description.slice(0, 61)}...`;

  const handleAddPhoneToBasket = id => () => addPhoneToBasket(id);

  return (
    <Card raised>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={phone.name}
          src={phone.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" componnet="h2" className={classes.title}>
            <Link to={`/phones/${phone.id}`}>
              {phone.name}
            </Link>
            <span>${phone.price}</span>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button color="primary" onClick={handleAddPhoneToBasket(phone.id)}>
          Buy now!
        </Button>

        <Link to={`/phones/${phone.id}`} className={classes.link}>
          <Button color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = {
  addPhoneToBasket
};

export default connect(null, mapDispatchToProps)(PhoneCard);