import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, yellow } from '@material-ui/core/colors/'
import TileBoard from './components/tile-board/tile-board'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow
  }
});
//theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App" >
        <TileBoard />
      </div>
    </MuiThemeProvider> 
  );
}

export default App;
