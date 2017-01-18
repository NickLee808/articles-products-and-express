//jshint esversion:6

let arrayOfProducts = [];
let newIdNum = 0;

function createNewProduct(clientPostObj){
  clientPostObj.id = `${newIdNum}`;
  arrayOfProducts.push(clientPostObj);
  newIdNum++;
}

function getProductById(id){
  for (i = 0; i < arrayOfProducts.length; i++){
    if(arrayOfProducts[i].id === id){
      return arrayOfProducts[i];
    }
  }
}

function updateProductById(reqBody){
  let productToUpdate = getProductById(reqBody.id);
  if (reqBody.name !== undefined){
    productToUpdate.name = reqBody.name;}
  if (reqBody.price !== undefined){
    productToUpdate.price = reqBody.price;}
  if (reqBody.inventory !== undefined){
    productToUpdate.inventory = reqBody.inventory;}
}

function deleteProductById(id){

}

function getAllProducts(){
  return arrayOfProducts;
}

module.exports = {
  createNewProduct,
  deleteProductById,
  getProductById,
  getAllProducts,
  updateProductById,
};