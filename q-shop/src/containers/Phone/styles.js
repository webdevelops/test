import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2.5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4.5),
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6),
    },
  },
  info:{
    marginBottom: theme.spacing(2.5),
  },
  image: {
    maxWidth: theme.spacing(38),
    marginBottom: theme.spacing(3.8),
  },
  fields: {
    paddingLeft: theme.spacing(1.5),
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    '& span': {
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
  },
  field: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.2, 0),
    borderBottom: "1px dotted #ccc",
    '& h6': {
      marginRight: theme.spacing(1.2),
    },
  },
  sidebarTitle: {
    marginTop: theme.spacing(2.5),
  },
  backToStore: {
    margin: theme.spacing(2, 0),
    display: "block",
    textDecoration: "none",
    '& button': {
      color: theme.palette.background.paper,
      background: theme.palette.info.main,
      trnasition: "0.3s",
      '&:hover': {
        background: theme.palette.info.dark,
      },
    },
  },
  addToBasket: {
    color: theme.palette.background.paper,
    background: theme.palette.success.main,
    '&:hover': {
      background: theme.palette.success.dark,
    },
  },
}));