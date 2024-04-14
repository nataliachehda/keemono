import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import './ItemCount.css';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = React.useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <ButtonGroup>
        <Button variant="contained" color="secondary" onClick={decrementar}>
          -
        </Button>
        <Button variant="contained" disabled>
          {contador}
        </Button>
        <Button variant="contained" color="secondary" onClick={incrementar}>
          +
        </Button>
      </ButtonGroup>
      <Button variant='contained' color='primary' onClick={() => funcionAgregar(contador)} sx={{ marginTop: '10px', marginBottom: '10px' }}>
        Add to cart
      </Button>
    </>
  );
};

export default ItemCount;
