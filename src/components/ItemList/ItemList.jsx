import React from 'react';
import Item from '../Item/Item';
import { Grid } from '@mui/material';

const ItemList = ({ productos }) => {
  return (
    <div className='contenedorProductos'>
      <Grid className='tarjetas' container spacing={3} justifyContent="center" sx={{ marginBottom: '20px' }}>
        {productos.map((prod) => (
          <Grid className='interiorcard' item key={prod.id} xs={12} sm={6} md={4}>
            <Item className='cardint' {...prod} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemList;

