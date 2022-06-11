import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const p = path.join(__dirname, "data", "cart.json");

export class Cart {
  static addProduct = (productId, productPrice) => {
    fs.readFile(p, (err, data) => {
      let cart = { products: [], totalPrice: 0 };

      if (!err) {
        cart = JSON.parse(data);
      }

      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === productId
      );

      const existingProduct = cart.products[existingProductIndex];

      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.quantity++;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: productId, quantity: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice += +productPrice;

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  };

  static deleteProduct = (productId, productPrice) => {
    fs.readFile(p, (err, data) => {
    
      if(err)return;

      const updatedCart = { ...JSON.parse(data) };

      const product = updatedCart.products.findIndex(prod => prod.id === productId);

      const poductQty = product.quantity;

      updatedCart.products = updatedCart.products.filter(prod => prod.id !== productId);

      updatedCart.totalPrice -= productPrice * poductQty;

      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }

  static getCart = (cb) =>{
    fs.readFile(p, (err, data) => {
      const cart = JSON.parse(data);
      if(err)return;

      else cb(cart);

    });
  } 
}
