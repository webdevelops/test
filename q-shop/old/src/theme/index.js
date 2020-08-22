import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { lightBlue, grey } from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[800],
    },
    secondary: {
      main: grey[500],
    }
  },
});

export default theme = responsiveFontSizes(theme);