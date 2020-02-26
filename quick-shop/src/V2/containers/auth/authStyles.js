import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#63bdf1",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    minWidth: 250,
    padding: 25,
    borderRadius: 5,
    '& h4': {
      fontWeight: "bold",
    },
  },
  header: {
    marginBottom: 20,
  },
  controlField: {
    display: "flex",
    alignItems: "center",
    '& svg': {
      marginTop: 10,
      marginRight: 10,
      opacity: .5,
    },
  },
  textField: {
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: "#0277bd",
    textDecoration: "none",
  },
  button: {
    marginTop: 30,
  },
  privacyPolicy: {
    alignSelf: "center",
    fontSize: 12,
    color: "#0277bd",
    textDecoration: "none",
    marginTop: 10,
  },
  cancel: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: "#0277bd",
    textDecoration: "none",
    marginTop: 30,
  },
  recovery: {
      marginTop: 10,
  },
});

export default useStyles