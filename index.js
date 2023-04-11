const express = require('express');
const app = express();

// ruta para la página principal
app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación Express');
});

// ruta para mostrar clientes
app.get('/clientes', (req, res) => {
  const clientes = ['cliente1', 'cliente2', 'cliente3'];
  res.json(clientes);
});

// ruta para mostrar productos
app.get('/productos', (req, res) => {
  const productos = ['producto1', 'producto2', 'producto3'];
  res.json(productos);
});

// configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Aplicación Express funcionando en el puerto ${PORT}`));
