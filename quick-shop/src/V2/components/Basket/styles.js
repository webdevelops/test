import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    marginTop: 80,
    [theme.breakpoints.up("xs")]: {
      marginTop: 90,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 105,
    },
    '& table tr:nth-of-type(even)': {
      background: "#eee",
    },
    '& table th,td': {
      border: "1px solid #ccc",
    },
    '& table td:nth-last-of-type(1)': {
      width: "12%",
    },
  },
  image: {
    width: "12%",
    padding: 5,
    '& img': {
      maxWidth: 100,
    },
  },
  deletePhone: {
    '&:hover': {
      color: [theme.palette.error.main],
    },
  },
  totalPrice: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "15px 0",
    '& b': {
      marginRight: 5,
    },
  },
  continueShopping: {
    display: "block",
    background: [theme.palette.info.main],
    borderRadius: 5,
    textDecoration: "none",
    marginBottom: 10,
    '&:hover': {
      background: [theme.palette.info.dark],
    },
    '& span': {
      color: "white",
    },
  },
  cleanBasket: {
    background: [theme.palette.error.main],
    color: "white",
    marginBottom: 10,
    '&:hover': {
      background: [theme.palette.error.dark],
    },
  },
  checkout: {
    background: [theme.palette.success.main],
    color: "white",
    '&:hover': {
      background: [theme.palette.success.dark],
    },
  },
}));