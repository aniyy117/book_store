import { Product } from "../models/product.js";

export const add_product = (req, res, next) => {
  res.render("add-prod.pug", {
    docTitle: "Add product",
    path: "/admin/add-product",
  });
};

export const post_product = (req, res, next) => {
  const product = new Product(req.body.title, req.body.price);
  console.log(req.body);
  product.save();
  res.redirect("/");
};

export const get_products = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
  });
};

export const error_page = (req, res, next) => {
  res.status(404).render("404.pug", { docTitle: "404" });
};
