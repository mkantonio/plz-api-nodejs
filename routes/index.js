const productsRouter = require('./products.router');
const userRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app){
  app.use('/products', productsRouter);
  app.use('/users', userRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
