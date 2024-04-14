import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Paper } from '@mui/material';
import { CarritoContext } from '../../context/CarritoContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <Paper elevation={3} className="carrito" sx={{ padding: '20px', borderRadius: '10px', backgroundColor: '#D59480' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>No products in the cart</Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          See products
        </Button>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} className="carrito" sx={{ padding: '20px', borderRadius: '10px', backgroundColor: '#D59480' }}>
      {carrito.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <Typography variant="h5" sx={{ marginBottom: '20px' }}>Total: $ {total}</Typography>
      
      <Button variant="contained" color="secondary" onClick={() => vaciarCarrito()} sx={{ marginTop: '10px' }}>
        Empty Cart
      </Button>
      <Button variant="contained" color="primary" component={Link} to="/checkout" sx={{ marginTop: '10px' }}>
        Complete Purchase
      </Button>
    </Paper>
  );
};

export default Cart;
