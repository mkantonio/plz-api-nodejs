const express = require('express');
const ProductService = require('../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res)=>{
  const products = await service.find();
  res.json(products);
});

// primero más especifico
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
})

// luego más genérico
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct,
  });
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json({
      message: 'partial update',
      data: product,
      id
    });
  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
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
  const product = service.delete(id);
  res.status(204).json({
    message: 'deleted',
    id: product.id
  });
});

module.exports = router;
