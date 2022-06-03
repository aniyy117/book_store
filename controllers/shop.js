import { Product } from "../models/product.js";


export const get_products = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/productList", { prods: products, docTitle: "Products", path: "/products" });
  });
};

export const product_cart = (req, res, next) => {
  res.render("shop/cart", { docTitle: "Your Cart" , path: "/cart" });
}

export const checkout = (req, res, next) => {
  res.render("shop/checkout", { docTitle: "Checkout" , path: "/checkout" });
}


export const getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", { prods: products, docTitle: "Shop", path: "/" });
  });
}

export const get_orders = (req, res, next) => {
  res.render("shop/order", { docTitle: "Your Orders" , path: "/orders" });
}