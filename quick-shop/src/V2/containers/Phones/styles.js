
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
  {
    root: {
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 80,
      [theme.breakpoints.up("sm")]: {
        marginTop: 95,
      },
      // [theme.breakpoints.up("lg")]: {
      //   marginTop: 95,
      // },
    },
    sidebar: {
      [theme.breakpoints.down("lg")]: {
        marginBottom: 30,
      },
      display: "block",
    },
    content: {
    },
    phoneCard: {
      [theme.breakpoints.down("xs")]: {
        margin: "auto",
      },
    },
    loadMore: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      margin: "30px 0 50px",
    }
  }
));