import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  navigation: {
    height: '100vh',
    maxWidth: 250,
    minWidth: 150,
    background: '#16792D',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textTransform: 'uppercase',
    '& .MuiTabs-vertical': {
      width: '100%',
    },
    '& li': {
      textAlign: 'center',
      cursor: "pointer",
    },
    '& a': {
      opacity: .5,
      transition: '.3s',
    },
    '& span[class^="PrivateTabIndicator"]': {
      background: '#8bd671',
      width: 5
    },
  },
  large: {
    // width: theme.spacing(7),
    // height: theme.spacing(7),
    width: 100,
    height: 100,
    marginBottom: 20,
    border: '6px solid #5fa23d',
  }
}));