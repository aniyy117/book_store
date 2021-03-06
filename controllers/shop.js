import { Product } from "../models/product.js";
import { Cart } from "../models/cart.js";

export const getProducts = (req, res, next) => {
   Product.fetchAll()
   .then(products => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch(err => {
      console.log(err);
    })
};

export const getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(product => {
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  }
  )
  .catch(err => {
    console.log(err);
  }
  )
};

export const getIndex = (req, res, next) => {
  Product.fetchAll()
  .then(products => {
     res.render("shop/index", {
       prods: products,
       pageTitle: "shop",
       path: "/",
     });
   })
   .catch(err => {
     console.log(err);
   })
};

export const getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (let product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({
            productData: product,
            qty: cartProductData.quantity,
            total: cartProductData.quantity * product.price,
          });
        }
      }
      console.log(cartProducts);

      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });

    });
  });
};

export const postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};


export const postCartDeleteProduct = (req, res, next) => {
   const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
      Cart.deleteProduct(prodId, product.price);
      res.redirect("/cart");
    });
}

export const getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

export const getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
