import path from "path";

import { Router } from "express";

import {getIndex , getProducts , getCart , getOrders , getCheckout , postCart , getProduct , postCartDeleteProduct} from "../controllers/shop.js";

const __dirname = path.resolve();

const router = Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProduct);

// router.get('/cart', getCart);

// router.post('/cart', postCart);

// router.post('/cart-delete-item/:productId', postCartDeleteProduct);

// router.get('/orders', getOrders);

// router.get('/checkout', getCheckout);


export default router;
