import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {},
  typography: {},
  overrides: {},
  custom: {
    color: {
      cinnabar: "#DE3D43",
      venetianRed: "#CC0018",
    },
  },
});

export default theme;
