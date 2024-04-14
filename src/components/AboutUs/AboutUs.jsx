import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <Paper elevation={3} className='aboutus' sx={{ padding: '20px', borderRadius: '10px', backgroundColor: '#D59480' }}>
      <Typography variant="h3" sx={{ marginBottom: '20px', fontFamily: '"Orbitron", sans-serif' }}>About us</Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        AsianaStyle is a virtual space where traditional Asian aesthetics meet modern Western fashion. 
        Each item in the store is designed with meticulous attention to detail, using high-quality materials 
        and blending ancient Asian styles with contemporary Western designs.
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: '20px', fontFamily: '"Orbitron", sans-serif' }}>Features</Typography>
      <List>
        <ListItem sx={{ marginBottom: '10px' }}>
          <ListItemText primary="Wide selection of handmade products by grandparents." />
        </ListItem>
        <ListItem sx={{ marginBottom: '10px' }}>
          <ListItemText primary="Product categories: clothing, shoes, accesories, and make-up." />
        </ListItem>
        <ListItem sx={{ marginBottom: '10px' }}>
          <ListItemText primary="Details of each product, including name, description, price, and availability." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Stock management made to order." />
        </ListItem>
      </List>
    </Paper>
  );
};

export default AboutUs;
