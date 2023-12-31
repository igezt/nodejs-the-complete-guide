const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products);
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    title: "Shop",
    hasProducts: products.length > 0,
  });
});

module.exports = router;
