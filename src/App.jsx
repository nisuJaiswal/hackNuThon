import Analysis from './pages/Analysis'
import Home from './pages/Home'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffff00",
    },
    // secondary: "#ffff00",
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Home/>
        {/* <Analysis /> */}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
