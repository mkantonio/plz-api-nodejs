const express = require('express');
const faker = require("faker");

const router = express.Router();


router.get('/', (req, res)=>{
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
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
})

// luego más genérico
router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999'){
    res.status(404).json({
      message: 'not found'
    })
  }
  res.status(200).json({
    id,
    name: `Product ${id}`,
    price: 3000
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'partial update',
    data: body,
    id
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(204).json({
    message: 'update',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  });
});

module.exports = router;
