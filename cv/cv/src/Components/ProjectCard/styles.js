import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(8),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(7),
    },
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: '100%',
    },
  },
  card: {
    maxWidth: 850,
    '& li': {
      color: theme.palette.grey[600],
    },
  },
}));