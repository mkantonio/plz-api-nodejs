const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send(`Hola desde mi server en express en el puerto ${port}`);
});

app.get('/nueva-ruta', (req, res)=>{
  res.send(`Hola desde la nueva ruta`);
});

app.get('/products', (req, res)=>{
  res.json([
    {
      name: 'Producto 1',
      price: 1000
    },
    {
      name: 'Producto 2',
      price: 2000
    }
  ]);
});

app.get('/product/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 3',
    price: 3000
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

app.listen(port, ()=>{
  console.log(`Hola desde consola de express en el puerto ${port}`);
});
