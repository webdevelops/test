import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
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
    color: '#0277bd',
    '& span': {
      fontSize: "1.3rem",
    }
  },
  linkIcon: {
    justifyContent: 'center',
  },
  linkSignUp: {
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
    },
    '& button': {
      color: "white",
    },
  },
  mobileMenu: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    '& a': {
      textDecoration: "none",
      color: "#0277bd",
    },
  },
}));