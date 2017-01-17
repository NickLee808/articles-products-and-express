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
  let id = reqBody.id;
  let productToUpdate = getProductById(id);
  
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