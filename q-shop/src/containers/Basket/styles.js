
import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4.5),
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6.5),
    },
    '& table tr:nth-of-type(even)': {
      background: theme.palette.grey[100],
    },
    '& table td': {
      padding: theme.spacing(.6),
      border: "1px solid #ccc",
    },
    '& table td:last-child': {
      width: "12%",
    },
  },
  image: {
    width: "12%",
    '& img': {
      maxWidth: theme.spacing(12.5)
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
    margin: theme.spacing(2, 0),
    '& b': {
      marginRight: theme.spacing(.6),
    },
  },
  continueShopping: {
    display: "block",
    textDecoration: "none",
    borderRadius: theme.spacing(.6),
    marginBottom: theme.spacing(1.2),
    background: [theme.palette.info.main],
    '&:hover': {
      background: [theme.palette.info.dark],
    },
    '& span': {
      color: theme.palette.background.paper,
    },
  },
  cleanBasket: {
    background: [theme.palette.error.main],
    '&:hover': {
      background: [theme.palette.error.dark],
    },
    color: theme.palette.background.paper,
    marginBottom: theme.spacing(1.2),
  },
  checkout: {
    background: [theme.palette.success.main],
    '&:hover': {
      background: [theme.palette.success.dark],
    },
    color: theme.palette.background.paper,
  },
}));