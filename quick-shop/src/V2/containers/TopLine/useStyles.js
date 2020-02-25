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
  signUp: {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
  },
  sectionDeskTop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
      '& svg': {
        color: "white",
      }
    },
  },
  moreIcon: {
    color: "white",
  },
  mobileLink: {
    textDecoration: "none",
    color: "#0277bd",
  },
  mobileList: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    }
  }
}));

export default useStyles