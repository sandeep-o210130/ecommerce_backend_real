const express = require('express');
const { addToCart, getCart, buyNow, checkout } = require('../controllers/cartController.js');
const auth = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post("/add", auth, addToCart);
router.get("/", auth, getCart);
router.post("/buy", auth, buyNow);
router.post("/checkout", auth, checkout);

module.exports = router;
