import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Card, CardMedia, CardContent } from '@mui/material';
import './Item.css';

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <Card className='cardProducto'>
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt={nombre}
        className='imgProducto'
        sx={{ objectFit: 'contain' }}
      />
      <CardContent className='cardcontent' sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{marginBottom:'10px'}}>{nombre}</Typography>
        <Typography variant="body1">Price: ${precio}</Typography>
        <Typography variant="body2">ID: {id}</Typography>
        <Typography variant="body2">Stock: {stock}</Typography>
        <Button component={Link} to={`/item/${id}`} variant="contained" color="secondary" className='button'>
          See details
        </Button>
      </CardContent>
    </Card>
  );
};

export default Item;
