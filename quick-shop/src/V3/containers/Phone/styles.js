import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    // paddingLeft: 20,
    // paddingRight: 20,
    marginTop: 80,
    [theme.breakpoints.up("sm")]: {
      marginTop: 95,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 105,
    },
  },
  info:{
    marginBottom: 20,
  },
  image: {
    maxWidth: 300,
    marginBottom: 30,
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
    padding: "10px 0",
    borderBottom: "1px dotted #ccc",
    '& h6': {
      marginRight: 10,
    },
  },
  sidebarTitle: {
    marginTop: 20,
  },
  backToStore: {
    margin: "15px 0",
    display: "block",
    textDecoration: "none",
    '& button': {
      color: "white",
      background: theme.palette.info.main,
      trnasition: "0.3s",
      '&:hover': {
        background: theme.palette.info.dark,
      },
    },
  },
  addToBasket: {
    color: "white",
    background: theme.palette.success.main,
    '&:hover': {
      background: theme.palette.success.dark,
    },
  },
}));