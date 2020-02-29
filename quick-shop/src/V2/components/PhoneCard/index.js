
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const PhoneCard = ({ phone }) => {
  const classes = useStyles();
  const shortDescription = `${phone.description.slice(0, 61)}...`;

  return (
    <Card raised>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={phone.name}
          image={phone.image}
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            <Link to={`/phones/${phone.id}`}>
              {phone.name}
            </Link>
            <span>${phone.price}</span>
          </Typography>

          <Typography variant="body2" component="p" color="textSecondary">
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button color="primary">
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

export default PhoneCard;