import { Product } from "../models/product.js";

export const add_product = (req, res, next) => {
  res.render("admin/add-prod.pug", {
    docTitle: "Add product",
    path: "/admin/add-product",
  });
};

export const post_product = (req, res, next) => {

  const title = req.body.title;
  const imageUrl = req.body.image_url;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(title, price , description , imageUrl);
  product.save();
  res.redirect("/");
};

export const get_products = (req, res, next) => {
   Product.fetchAll((products) => {
    res.render("admin/product", { prods: products, docTitle: "Products", path: "/admin/products" });
  });
}