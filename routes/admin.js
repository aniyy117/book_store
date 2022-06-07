import path from 'path';

import { Router } from 'express';

import {getAddProduct , getEditProduct, getProducts , postAddProduct , postEditProduct , deleteProduct } from "../controllers/admin.js"


export const router = Router();

const __dirname = path.resolve();



// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

router.get('/edit-product/:id', getEditProduct);

router.post('/edit-product', postEditProduct);

router.post('/delete-product/:id', deleteProduct);