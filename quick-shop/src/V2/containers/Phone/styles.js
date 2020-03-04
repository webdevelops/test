
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    paddingLeft: 15,
    paddingRight: 15,
    // overflow: "hidden",
    marginTop: 80,
    [theme.breakpoints.up("sm")]: {
      marginTop: 95,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 105,
    },
  },
  card: {
    [theme.breakpoints.down("md")]: {
      // marginBottom: 30,
    },
  },
  info: {
    marginBottom: 30,
  },
  image: {
    maxWidth: 300,
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    '& span': {
      fontSize: "1.2rem",
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
  titleSidebar: {
    marginTop: 20,
  },
  backToStore: {
    textDecoration: "none",
    display: "block",
    marginBottom: 15,
    '& button': {
      color: "white",
      background: theme.palette.info.main,
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
    }
  }
}));