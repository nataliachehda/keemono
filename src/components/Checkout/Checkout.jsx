import React, { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { Alert, Container, Typography, TextField, Button, Box, Paper } from "@mui/material";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrdenId] = useState("");

  const manejadorFormulario = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Please, complete all the fields");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("E-mail doesn´t match");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "keemono", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log("Error creating the order", error);
            setError("Error creating the order; please try again");
          });
      })
      .catch((error) => {
        console.log("Error updating the stock", error);
        setError("An error occurred while updating the stock. Please try again");
      });
  };

  return (
    <Container component={Paper} elevation={3} sx={{ padding: '20px', borderRadius: '10px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#D59480' }}>
      <Container sx={{ paddingRight: '50px', paddingLeft: '50px' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{fontFamily: '"Orbitron", sans-serif'}}>
        Checkout
      </Typography>
      <Box component="form" onSubmit={manejadorFormulario} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {carrito.map((producto) => (
          <Box key={producto.id} sx={{ marginBottom: '20px' }}>
            <Typography variant="body1">
              {producto.item.nombre} x {producto.cantidad}
            </Typography>
            <Typography variant="body1">Precio $ {producto.item.precio}</Typography>
            <hr />
          </Box>
        ))}
        <Box sx={{ marginBottom: '20px', width: '100%', textAlign: "center" }}>
          <Typography variant="body1">Total : {total}</Typography>
        </Box>
        <hr />
        <TextField
          id="nombre"
          label="Name"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ marginBottom: '20px', width: '60%', backgroundColor: 'white' }}
        />

        <TextField
          id="apellido"
          label="Last name"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ marginBottom: '20px', width: '60%', backgroundColor: 'white'}}
        />

        <TextField
          id="telefono"
          label="Phone"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ marginBottom: '20px', width: '60%', backgroundColor: 'white' }}
        />

        <TextField
          id="email"
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ marginBottom: '20px', width: '60%', backgroundColor: 'white' }}
        />

        <TextField
          id="emailConfirmacion"
          label="Confirm e-mail"
          type="email"
          value={emailConfirmacion}
          onChange={(e) => setEmailConfirmacion(e.target.value)}
          margin="normal"
          variant="outlined"
          sx={{ marginBottom: '20px', width: '60%', backgroundColor: 'white' }}
        />

        {error && <Alert severity="error" sx={{ marginBottom: '20px', width: '100%' }}>{error}</Alert>}

        <Button variant="contained" color="primary" type="submit" sx={{ marginBottom: '20px', width: '60%' }}>
          Make order
        </Button>
      </Box>
      {orderId && (
        <Typography variant="subtitle1" align="center" sx={{ marginBottom: '20px', width: '100%' }}>
          Thank you for your purchase! Your order number is {orderId}.
          <hr /> You will receive an email at {email} with the payment order.
        </Typography>
      )}
      </Container>
    </Container>
  );
};

export default Checkout;
