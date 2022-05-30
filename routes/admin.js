import path from 'path';

import { Router } from 'express';

import {add_product , post_product} from "../controllers/product.js"


export const router = Router();

const __dirname = path.resolve();



// /admin/add-product => GET
router.get('/add-product', add_product);

router.post('/add-product',post_product);





