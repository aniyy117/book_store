import { Product } from "../models/product.js";

export const getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product( title, imageUrl, description, price , null);
  product.save().
  then(result=>{
    res.redirect("/products");
    console.log(result)
  }).catch(err=>console.log(err))
  
};

export const getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.id;
  Product.findById(prodId).
  then(product =>{
    if(!product){
      return res.redirect('/');
    }
    else{
      res.render('admin/edit-product', {
        pageTitle:'Edit Product',
        path:'/admin/edit-product',
        editing:editMode,
        product:product
      });
    }
  }).catch(err => {
    console.log(err);
  })
};

export const postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice,
    prodId,
  );
  updatedProduct.update().then(result => {
    console.log(result);

  res.redirect('/admin/products');
  }).catch(err => {
    console.log(err);
  }
  );
};

export const deleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
    res.redirect('/admin/products');
  
};



export const getProducts = (req, res, next) => {
  Product.fetchAll().
  then(products =>{
    res.render("admin/products" , {
      prods:products,
      pageTitle:"Admin Products",
      path:"/admin/products"
    })
  })
};
