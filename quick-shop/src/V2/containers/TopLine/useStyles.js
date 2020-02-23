import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'blue',
  },
  linkItem: {
    justifyContent: 'center',
  },
}));

export default useStyles;