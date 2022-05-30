import path from 'path';

import { Router } from 'express';

import { get_products } from "../controllers/product.js";


const __dirname = path.resolve();


const router = Router();

router.get('/', get_products);

export default router;
