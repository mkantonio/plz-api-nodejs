const express = require('express');

const productsRouter = require('./products.router');
const userRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoriesRouter);

  /*const router2 = express.Router();
  app.use('/api/v2', router2);
  router2.use('/products', productsRouter);
  router2.use('/users', userRouter);
  router2.use('/categories', categoriesRouter);*/
}

module.exports = routerApi;
