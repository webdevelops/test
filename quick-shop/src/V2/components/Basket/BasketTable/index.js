import React from 'react';
import {
  TableContainer, Table,
  TableHead, TableBody, Paper,
  TableRow, TableCell, IconButton
} from '@material-ui/core';

import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

import useStyles from '../styles';

const BasketTable = ({ phones }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {/* <TableRow>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Delete Phone</TableCell>
          </TableRow> */}
        </TableHead>
        <TableBody>
          {phones.map(phone => (
            <TableRow key={phone.name}>
              <TableCell align="center" className={classes.image} >
                <img src={phone.image} alt={phone.name} />
              </TableCell>
              <TableCell align="center">{phone.name}</TableCell>
              <TableCell align="center">{phone.count}</TableCell>
              <TableCell align="center">${phone.price}</TableCell>
              <TableCell align="center">
                <IconButton className={classes.deletePhone} >
                  <DeleteForeverTwoToneIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasketTable;