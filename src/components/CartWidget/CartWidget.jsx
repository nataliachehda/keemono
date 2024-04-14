import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { CarritoContext } from '../../context/CarritoContext';
import './CartWidget.css';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    return (
        <div className='widgetCarrito'>
            <Link to="/cart">
                <Badge badgeContent={cantidadTotal} color="secondary">
                    <IconButton aria-label="Cart">
                        <ShoppingCart className='imgCarrito' />
                    </IconButton>
                </Badge>
            </Link>
        </div>
    );
};

export default CartWidget;
