import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import { Typography, Button } from '@mui/material';

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className='contenedorItem tarjeta'>
      <Typography variant="h5">{nombre}</Typography>
      <Typography variant="h6">Price: ${precio}</Typography>
      <Typography variant="subtitle1">ID: {id}</Typography>
      <Typography variant="body1"> {descripcion}</Typography>
      <img src={img} alt={nombre} className='imgProducto' style={{ width: '300px', height: 'auto', marginBottom: '20px' }} />

      {agregarCantidad > 0 ? (
        <>
          <Button component={Link} to="/cart" variant="contained" color="primary">
            Add to Cart
          </Button>
          <Button component={Link} to="/" variant="contained" color="secondary" style={{ marginTop: '10px' }}>
            More products
          </Button>
        </>
      ) : (
        <>
          <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          <Button component={Link} to="/" variant="contained" color="secondary" style={{ marginTop: '10px' }}>
            More products
          </Button>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
