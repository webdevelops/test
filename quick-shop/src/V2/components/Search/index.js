
import React, { useState } from 'react';
import { makeStyles, TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';

import { searchPhone } from '../../store/actions/phonesActions';

const useStyles = makeStyles({
  searchField: {
    padding: "50px 25px",
    background: "#eee",
    '& form': {
      display: "flex",
      position: "relative",
      '& .MuiFormControl-root': {
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
});

const Search = ({ searchPhone }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleSearchPhone = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    searchPhone(value);
  }

  return (
    <div className={classes.searchField}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          onChange={handleSearchPhone}
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
}

export default connect(null, mapDispatchToProps)(Search);