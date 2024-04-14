import React from 'react';
import Item from '../Item/Item';
import { Grid } from '@mui/material';

const ItemList = ({ productos }) => {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ marginBottom: '20px' }}>
      {productos.map((prod) => (
        <Grid item key={prod.id} xs={12} sm={6} md={4}>
          <Item {...prod} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
