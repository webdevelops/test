import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

export default function Spinner() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress disableShrink />
    </Box>
  );
}