const express = require('express');
const { getProducts, seedProducts, createProduct } = require('../controllers/productController.js');
const router = express.Router();

router.get("/", getProducts);
router.post("/seed", seedProducts);
router.post("/create", createProduct);

module.exports = router;
