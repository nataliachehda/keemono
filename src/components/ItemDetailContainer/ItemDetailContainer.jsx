import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/config';
import { CircularProgress } from '@mui/material';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "keemono", idItem);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoProducto = { id: res.id, ...data };
                setProducto(nuevoProducto);
            })
            .catch(error => console.log(error));
    }, [idItem]);

    return (
        <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {producto ? <ItemDetail {...producto} /> : <CircularProgress />}
        </div>
    );
}

export default ItemDetailContainer;
