
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
  {
    root: {
      // width: 300,
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

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
      textDecoration: "none",
    },
    image: {
      maxWidth: 300,
      margin: "auto",
    },
  }
));