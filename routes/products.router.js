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
  res.json({
    id,
    name: `Product ${id}`,
    price: 3000
  });
});


module.exports = router;