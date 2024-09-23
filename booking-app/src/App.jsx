
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Hotels from './pages/Hotels';
import { AppBar, Toolbar, Button ,createTheme, ThemeProvider , CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif', 
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto, sans-serif', 
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto, sans-serif', 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto, sans-serif', 
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Main</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/hotels">Hotels</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </Router>
    </ThemeProvider>
   
  );
}

export default App;
