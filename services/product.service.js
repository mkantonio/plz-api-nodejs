const faker = require("faker");

const tiempoAleatorio = Math.floor(Math.random() * (3500 - 2000 ) + 2000);


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

  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;

  }

  // Retorna todos los productos
  async find(){
    return new Promise( (resolve, reject) => {
      console.log(tiempoAleatorio);
      setTimeout( () => resolve(this.products), tiempoAleatorio);
    });
  }

  // Retorna un elemento buscado por ID
  async findOne(id){
    const name = this.getTotal();
    return this.products.find( item => item.id === id);
  }


  async update(id, data){
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


  async delete(id){
    const indexProduct = this.products.findIndex( (item) => item.id === id);
    if (indexProduct === -1){
      throw new Error('Product not found');
    }
    this.products.splice(indexProduct, 1);
    return {id};

  }

}

module.exports = ProductService;
