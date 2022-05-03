"use strict";

const productSchema = require("./product");
const paymentSchema = require("./payment");

module.exports = {
  "myplugin-product": { schema: productSchema }, //// should re-use the singularName of the content-type
  "myplugin-payment": { schema: paymentSchema },
};
