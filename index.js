const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send(`Hola desde mi server en express en el puerto ${port}`);
});

app.get('/nueva-ruta', (req, res)=>{
  res.send(`Hola desde la nueva ruta`);
});

app.get('/products', (req, res)=>{
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

// primero más especifico
app.get('/product/filter', (req, res) => {
  res.send('Yo soy un filter');
})

// luego más genérico
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

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (!limit && !offset){
    res.json('No hay parametros');
  }
  res.json({
    limit,
    offset
  })
})

app.listen(port, ()=>{
  console.log(`Hola desde consola de express en el puerto ${port}`);
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(`${time}`)
});
