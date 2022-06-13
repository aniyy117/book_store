import fs from "fs";
import path from "path";

import mongodb from "mongodb";

import { Cart } from "./cart.js";

const __dirname = path.resolve();

const p = path.join(__dirname, "data", "products.json");

import {getDb} from "../util/database.js";

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};


export class Product {
  constructor(title, imageUrl, description, price , id) {
    // this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this._id = new mongodb.ObjectId(id);
  }
  save() {
    const db = getDb();

    let dbOpration;

      dbOpration = db.collection("products").insertOne(this) ;

    return dbOpration.then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    })

  }

  update () {
    const db = getDb();
    let dbOpration;
    dbOpration = db.collection("products").updateOne({_id: this._id}, {$set: this})
    return dbOpration.then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    })


  }

  static fetchAll() {
    const db = getDb();

    return db.collection("products").find().toArray().then(products => {
      console.log(products);
      return products;
    })
    .catch(err => {
      console.log(err);
    })
  }

  static findById(id) {

    const db = getDb();

    return db.collection("products").find({_id: new mongodb.ObjectId(id)}).next()
    .then(product => {
      console.log(product);
      return product;
    })
    .catch(err => {
      console.log(err);
    })
  }

  static deleteById(id){
    const db = getDb();

    db.collection("products").deleteOne({_id: new mongodb.ObjectId(id)})
    .then(result =>{
      console.log("delete")
    }).catch(err=>console.log(err))
  }
}
