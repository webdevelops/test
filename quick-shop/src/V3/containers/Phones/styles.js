import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    marginTop: 95,
    paddingLeft: 15,
    paddingRight: 15,
    maxWidth: 1920,
    minWidth: 320,
    margin: "0 auto",
    // overflow: "hidden",
  },
  '& .MuiGrid-spacing-xs-4': {
    // margin: 0,
  },
  sidebar: {
    marginBottom: 30,
  },
  content: {
  },
  card: {
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
    },
  },

}));