import path from 'path';

import express from 'express';
import pkg from 'body-parser';
import {router} from './routes/admin.js';
import shopRoutes from './routes/shop.js';

import {error_page} from "./controllers/error.js";


import {MongoConnet} from "./util/database.js";

const { urlencoded } = pkg;

const app = express();

app.set("view engine" , "pug")

app.set('view engine', 'ejs');
app.set('views', 'views');



const __dirname = path.resolve();


app.use(urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
    next();
});

app.use('/admin', router);
app.use(shopRoutes);



app.use(error_page);


MongoConnet((client)=>{

});

app.listen(4000);