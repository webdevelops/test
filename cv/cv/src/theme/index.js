import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    success: {
      main: '#4CAF50',
      light: '#8bd671',
    },
  },
});

export default theme = responsiveFontSizes(theme);