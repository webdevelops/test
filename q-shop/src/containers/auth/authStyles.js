import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#63bdf1",
    position: "fixed",
    minWidth: 320,
    left: 0,
    right: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    background: theme.palette.background.paper,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(.6),
    minWidth: theme.spacing(30),
  },
  header: {
    marginBottom: theme.spacing(2.5),
    '& h4': {
      fontWeight: "bold",
    },
  },
  formControl: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1.2),
    '& svg': {
      marginTop: theme.spacing(3),
      marginRight: theme.spacing(1.2),
      opacity: .5,
    },
  },
  button: {
    marginTop: theme.spacing(4),
  },
  recovery: {
    marginTop: theme.spacing(1.2),
  }
}));

export default useStyles;