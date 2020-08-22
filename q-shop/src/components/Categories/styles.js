import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(6.5, 3.5, 8, 3.5),
    background: theme.palette.grey[200],
    '& nav': {
      background: theme.palette.background.paper,
      padding: 0,
    },
  },
  category: {
    padding: 0,
    '& a': {
      width: "100%",
      padding: theme.spacing(1, 2),
      textDecoration: "none",
      color: "inherit",
    },
    '& span': {
      fontSize: "1.3rem",
    },
    '&.Mui-selected': {
      background: [theme.palette.primary.main],
      color: theme.palette.background.paper,
      trnasition: "0.3s",
      '&:hover': {
        background: [theme.palette.primary.main],
      },
    },
  },
}));