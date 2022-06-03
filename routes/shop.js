import path from 'path';

import { Router } from 'express';

import { get_products , getIndex , product_cart  , checkout , get_orders } from "../controllers/shop.js";


const __dirname = path.resolve();


const router = Router();

router.get('/', getIndex);

router.get("/products", get_products)

router.get('/cart', product_cart)

router.get('/checkout' , checkout )

router.get('/orders' , get_orders)

export default router;
