import fs from "fs";
import path from "path";
import express from "express";

const __dirname = path.resolve();

const p = path.join(__dirname, "data", "products.json");

export class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  save = () => {
    console.log("Saving product");
    // products.push(this);

    fs.readFile(p, (err, data) => {
      let products = [];

      if (!err) {
        products = JSON.parse(data);
      }

      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  };

  static fetchAll = (cb) => {
    fs.readFile(p, (err, data) => {
      if (!err) {
        cb(JSON.parse(data));
      } else {
        cb([]);
      }
    });
  };
}
