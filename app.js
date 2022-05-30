import path from 'path';

import express from 'express';
import pkg from 'body-parser';
const { urlencoded } = pkg;

const app = express();

app.set("view engine" , "pug")

import {router} from './routes/admin.js';
import shopRoutes from './routes/shop.js';

import {error_page} from "./controllers/product.js"

const __dirname = path.resolve();


app.use(urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', router);
app.use(shopRoutes);





app.use(error_page);

app.listen(4000);
