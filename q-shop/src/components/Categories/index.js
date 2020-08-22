import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import useStyles from './styles';

const Categories = ({ categories, match }) => {
  const classes = useStyles();
  const activeCategory = match.params.id || undefined;

  const renderAllCategories = () => {
    return (
      <ListItem
        button
        divider
        selected={activeCategory === undefined}
        className={classes.category}
      >
        <Link to="/">
          <ListItemText primary="All" />
        </Link>
      </ListItem>
    );
  };

  const renderCategories = () => {
    return (
      categories.map(category => (
        <ListItem
          button
          divider
          key={category.id}
          selected={category.id === activeCategory}
          className={classes.category}
        >
          <Link to={`/categories/${category.id}`}>
            <ListItemText primary={category.name} />
          </Link>
        </ListItem>
      ))
    );
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4">
        Brand
      </Typography>

      <List component="nav">
        {renderAllCategories()}
        {renderCategories()}
      </List>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object,
};

export default withRouter(Categories);