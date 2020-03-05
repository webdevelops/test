import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    padding: "50px 25px 60px",
    background: "#eee",
    '& nav': {
      background: "white",
      padding: 0,
    },
  },
  category: {
    padding: 0,
    '& a': {
      width: "100%",
      padding: "8px 16px",
      textDecoration: "none",
      color: "inherit",
    },
    '& span': {
      fontSize: "1.3rem",
    },
    '&.Mui-selected': {
      background: [theme.palette.primary.main],
      color: "white",
      trnasition: "0.3s",
      '&:hover': {
        background: [theme.palette.primary.main],
      },
    },
  },
}));