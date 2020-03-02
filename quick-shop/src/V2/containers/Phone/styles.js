
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    marginTop: 95,
    paddingLeft: 15,
    paddingRight: 15,
    // overflow: "hidden",
  },
  card: {
    [theme.breakpoints.down("md")]: {
      // marginBottom: 30,
    },
  },
  info: {
    marginBottom: 30,
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
}));