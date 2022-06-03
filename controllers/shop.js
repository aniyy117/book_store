import { Product } from "../models/product.js";

export const get_products = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/productList", {
      prods: products,
      docTitle: "Products",
      path: "/products",
    });
  });
};

export const get_product = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/productDetails", {
      product: product,
      docTitle: "Product Detail",
      path: `/products`,
    });
  });
};

export const product_cart = (req, res, next) => {
  res.render("shop/cart", { docTitle: "Your Cart", path: "/cart" });
};

export const post_cart = (req, res, next) => {
  const prodId = req.body.productId;
  console.log(prodId);
  Product.findById(prodId, (product) => {
    console.log(product);
    res.render("shop/cart", {
      product: product,
      docTitle: "Your Cart",
      path: "/cart",
    });
  });
};
export const checkout = (req, res, next) => {
  res.render("shop/checkout", { docTitle: "Checkout", path: "/checkout" });
};

export const getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", { prods: products, docTitle: "Shop", path: "/" });
  });
};

export const get_orders = (req, res, next) => {
  res.render("shop/order", { docTitle: "Your Orders", path: "/orders" });
};
