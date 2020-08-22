
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
  sidebar: {
    display: "block",
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(4),
    },
  },
  card: {
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
    },
  },
  loadMore: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    margin: theme.spacing(4, 0, 6.5, 0),
  },
}));