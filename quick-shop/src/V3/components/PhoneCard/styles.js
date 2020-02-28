
import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => (
  {
    root: {
      marginTop: 95,
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",

      '& a': {
        color: "#007bff",
        textDecoration: "none",

        '&:hover': {
          textDecoration: "underline",
        },
      },

      '& span': {
        fontSize: "1.2rem",
        fontWeight: "bold",
      },
    },
    link: {
      color: "#0277bd",
      textDecoration: "none",
    },
  }
));