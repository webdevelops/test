
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
    '& table td': {
      padding: 5,
      border: "1px solid #ccc",
    },
    '& table td:last-child': {
      width: "12%",
    },
  },
  image: {
    width: "12%",
    '& img': {
      maxWidth: 100
    },
  },
  deletePhone: {
    '&:hover': {
      color: [theme.palette.error.main],
    }
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
    textDecoration: "none",
    borderRadius: 5,
    marginBottom: 10,
    background: [theme.palette.info.main],
    '&:hover': {
      background: [theme.palette.info.dark],
    },
    '& span': {
      color: "white",
    },
  },
  cleanBasket: {
    background: [theme.palette.error.main],
    '&:hover': {
      background: [theme.palette.error.dark],
    },
    color: "white",
    marginBottom: 10,
  },
  checkout: {
    background: [theme.palette.success.main],
    '&:hover': {
      background: [theme.palette.success.dark],
    },
    color: "white",
  },
}));