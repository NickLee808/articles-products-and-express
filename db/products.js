//jshint esversion:6

const pgp = require('pg-promise')();
const PG_PASS = process.env.PG_PASS;
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products_express',
  user: 'articles_products_user',
  password: PG_PASS
});

module.exports = (function(){

  function createNewProduct(clientPostObj){
    return db.none(`INSERT INTO products (name, price, inventory) VALUES ('${clientPostObj.name}', ${clientPostObj.price}, ${clientPostObj.inventory})`);
  }

  function deleteProductById(){
    return db.none();
  }

  function getProductById(){
    return db.one();
  }

  function getAllProducts(){
    return db.any('SELECT * FROM products');
  }

  function updateProductById(){
    return db.none();
  }

  return {
    createNewProduct,
    deleteProductById,
    getProductById,
    getAllProducts,
    updateProductById,
  };

})();