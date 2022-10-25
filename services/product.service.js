const faker = require("faker");

class ProductService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;

  }

  // Retorna todos los productos
  find(){
    return this.products;
  }

  // Retorna un elemento buscado por ID
  findOne(id){
    return this.products.find( item => item.id === id);
  }


  update(id, data){
    const indexProduct = this.products.findIndex( (item) => item.id === id);
    if (indexProduct === -1){
      throw new Error('Product not found');
    }
    const product = this.products[indexProduct];
    console.log(product);
    this.products[indexProduct] = {
      ...product,
      ...data,
    }
    return this.products[indexProduct];
  }


  delete(id){
    const indexProduct = this.products.findIndex( (item) => item.id === id);
    if (indexProduct === -1){
      throw new Error('Product not found');
    }
    this.products.splice(indexProduct, 1);
    return {id};

  }

}

module.exports = ProductService;
