import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, ThemeProvider } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';
import { createTheme } from '@mui/material/styles';
import './NavBar.css';
import imgAbu from '/src/img/keemono.svg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D8CCBC', 
    },
  },
});

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className="customAppBar">
        <Toolbar className="toolbarContainer">
          <Link to="/" className="brandLink"> {/* Aquí el cambio */}
            <img className="imgAbu" src={imgAbu} alt="logo" />
          </Link>
          <div className="navLinks">
            <Button color="inherit" component={NavLink} to="/AboutUs" activeClassName="activeLink" className="navButton">
              About Us
            </Button>
            <Button color="inherit" component={NavLink} to="/categoria/1" activeClassName="activeLink" className="navButton">
              Clothing
            </Button>
            <Button color="inherit" component={NavLink} to="/categoria/2" activeClassName="activeLink" className="navButton">
            Accesories
            </Button>
            <Button color="inherit" component={NavLink} to="/categoria/3" activeClassName="activeLink" className="navButton">
              Shoes
            </Button>
            <Button color="inherit" component={NavLink} to="/categoria/4" activeClassName="activeLink" className="navButton">
              Make-up
            </Button>
          </div>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
