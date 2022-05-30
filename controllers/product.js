import { Product } from "../models/product.js";



export const add_product =(req, res, next) => {
    res.render('add-prod.pug' ,{  docTitle: 'Add product'  , path: '/admin/add-product'});
  }


export const post_product =  (req, res, next) => {
    const product = new Product(req.body.title ,  Number.parseFloat(req.body.price));
    console.log(Number.parseFloat(req.body.price))
    product.save();
    res.redirect('/');
}


export const get_products = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop' , { prods:products , docTitle: 'Shop' , path: '/' });
}

export const error_page = (req, res, next) => {
    res.status(404).render('404.pug' ,{  docTitle: '404'  });
}