import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  content: {
    marginLeft: 40,
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: 150
    // },
  },
  title: {
    // margin: 0,
  },
  // sectionMobile: {
  //   display: "flex",
  //   [theme.breakpoints.up("sm")]: {
  //     display: 'none',
  //   },
  // },
  // marginLeft: drawerWidth + 20
}));

export const MainContent = () => {
  const classes = useStyles();
  const text = (
    [...new Array(12)].map(() =>
      `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
    ).join('\n')
  );

  return (
    <div>
      <div className={classes.sectionMobile}>
        <div id="section1" title="Setion1">
          <Box my={0}>
            <h3 className={classes.title}>Section 1</h3>
            {text}
            {/* <Divider /> */}
          </Box>
        </div>

        <div id="section2" title="Setion1">
          <Box my={0}>
            <h3 className={classes.title}>Section 2</h3>
            {text}
            {/* <Divider /> */}
          </Box>
        </div>

        <div id="section3" title="Setion1">
          <Box my={0}>
            <h3 className={classes.title}>Section 3</h3>
            {text}
            {/* <Divider /> */}
          </Box>
        </div>
      </div>
    </div>
  )
}