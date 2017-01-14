//jshint esversion:6

let arrayOfProducts = [];
let newIdNum = 0;

function createNewProduct(clientPostObj){
  clientPostObj.id = `${newIdNum}`;
  arrayOfProducts.push(clientPostObj);
  newIdNum++;
  console.log(arrayOfProducts);
}

function deleteProductById(){

}

function getProductById(){
  
}

function getAllProducts(){
  return arrayOfProducts;
}

module.exports = {
  createNewProduct,
  deleteProductById,
  getProductById,
  getAllProducts
};