import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';
import { Typography } from '@mui/material';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const misProductos = idCategoria 
            ? query(collection(db, "keemono"), where("idCat", "==", idCategoria)) 
            : collection(db, "keemono");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error));
    }, [idCategoria]);

    return (
        <>
            <Typography className='marca' variant="h4" align="center" gutterBottom sx={{ fontFamily: '"Orbitron", sans-serif', marginTop:'10px', }}>
                Keemono
            </Typography>
            <ItemList className='contiene' productos={productos} />
        </>
    );
};

export default ItemListContainer;
