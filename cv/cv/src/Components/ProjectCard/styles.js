import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    padding: '0 50px',
    [theme.breakpoints.down('xs')]: {
      padding: '0 20px'
    },
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: '100%',
    },
  },
  card: {
    maxWidth: 700,
    '& li': {
      color: theme.palette.grey[600],
    },
  },
}));