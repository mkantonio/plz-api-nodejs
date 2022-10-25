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

  create(){

  }

  // Retorna todos los productos
  find(){
    return this.products;
  }

  // Retorna un elemento buscado por ID
  findOne(id){
    return this.products.find( item => item.id === id);
  }


  update(){

  }


  delete(){

  }

}

module.exports = ProductService;
