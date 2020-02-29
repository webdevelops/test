
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
  {
    root: {
      marginTop: 95,
      maxWidth: 1920,
      minWidth: 320,
      paddingLeft: 15,
      paddingRight: 15,
      margin: "0 auto",
    },
    sidebar: {
      [theme.breakpoints.down("lg")]: {
        marginBottom: 30,
      },
    
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