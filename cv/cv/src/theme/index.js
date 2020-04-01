import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8bd671',
      main: '#4CAF50',
      dark: '#357a38',
    },
  },
  typography: {
    h1: { fontFamily: "Helvetica Neue", textTransform: 'uppercase', fontWeight: 700 },
    h2: { fontFamily: "Helvetica Neue", textTransform: 'uppercase', fontWeight: 700 },
    h4: { fontFamily: "Helvetica Neue", textTransform: 'uppercase', fontWeight: 700 },
    h6: { fontFamily: "Helvetica Neue" },
  },
});

export default theme = responsiveFontSizes(theme);