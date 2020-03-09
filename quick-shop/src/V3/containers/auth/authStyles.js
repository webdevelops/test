import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#63bdf1",
    position: "fixed",
    left: 0,
    right: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    padding: 25,
    borderRadius: 5,
    minWidth: 250,
  },
  header: {
    marginBottom: 20,
    '& h4': {
      fontWeight: "bold",
    },
  },
  formControl: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    '& svg': {
      marginTop: 20,
      marginRight: 10,
      opacity: .5,
    },
  },
  button: {
    marginTop: 30,
  },
  recovery: {
    marginTop: 10,
  }
}));

export default useStyles;