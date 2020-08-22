import React, { useState } from 'react';
import { makeStyles, TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchPhone } from '../../store/actions/phonesActions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(7.5, 3),
    background: theme.palette.grey[200],
    marginBottom: theme.spacing(4),
    '& form': {
      display: "flex",
      position: "relative",
      '& > div': {
        width: "100%",
      },
    },
    '& input': {
      background: "white",
    },
    '& button': {
      position: "absolute",
      top: 5,
      right: 5,
    },
  },
}));

const Search = ({ searchPhone }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleSearch = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    searchPhone(value);
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="search"
          variant="outlined"
          label="Search"
          value={value}
          onChange={handleSearch}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  searchPhone
};

Search.propTypes = {
  searchPhone: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Search);