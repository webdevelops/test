
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 95,
  },
  sidebar: {
    width: "25%",
  },
  content: {
    width: "75%",
    display: "flex",
    flexWrap: "wrap",
  },
  phoneCard: {
    width: "33.33%",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 30,
  },
});