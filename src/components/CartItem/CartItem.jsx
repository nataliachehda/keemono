import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Typography, Button, Divider, Paper } from '@mui/material';

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <Paper elevation={3} sx={{ padding: '15px', marginBottom: '15px' }}>
            <Typography variant="h6">{item.nombre}</Typography>
            <Typography variant="body1">Quantity: {cantidad}</Typography>
            <Typography variant="body1">Price: ${item.precio}</Typography>
            <Button variant="contained" color="warning" onClick={() => eliminarProducto(item.id)} sx={{ marginTop: '10px' }}>
                Remove
            </Button>
            <Divider sx={{ marginTop: '10px' }} />
        </Paper>
    );
};

export default CartItem;
