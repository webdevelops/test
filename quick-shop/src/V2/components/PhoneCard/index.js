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

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={phone.name}
          image={phone.image}
          title={phone.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Link to={`/phones/${phone.id}`}>
              {phone.name}
            </Link>
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {phone.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary">
          Buy now!
        </Button>
        <Link to={`/phones/${phone.id}`}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  )
}

export default PhoneCard