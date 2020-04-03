import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  navigation: {
    position: 'fixed',
    width: '30%',
    height: '100vh',
    maxWidth: theme.spacing(35),
    minWidth: theme.spacing(22),
    backgroundColor: theme.palette.success.dark,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textTransform: 'uppercase',
    '& .MuiTab-root': {
      fontSize: '1.2rem',
      maxWidth: 'inherit',
    },
    '& .MuiTabs-vertical': {
      width: '100%',
    },
    '& span[class^="PrivateTabIndicator"]': {
      backgroundColor: theme.palette.success.light,
      width: theme.spacing(.8)
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(3),
    border: '8px solid #5fa23d',
  },
  [theme.breakpoints.down('sm')]: {
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      marginBottom: theme.spacing(2),
      border: '6px solid #5fa23d',
    },
  },
  [theme.breakpoints.down('xs')]: {
    navigation: {
      '& span[class^="PrivateTabIndicator"]': {
        width: theme.spacing(.5),
      },
    },
  }
}));