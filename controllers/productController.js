const Product = require('../models/Product.js');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { name, price, image, description } = req.body;
        const product = new Product({ name, price, image, description });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.seedProducts = async (req, res) => {
    const sampleProducts = [
        { name: "iPhone 14", price: 80000, image: "https://via.placeholder.com/150", description: "Apple smartphone" },
        { name: "Samsung Galaxy S23", price: 75000, image: "https://via.placeholder.com/150", description: "Samsung smartphone" },
        { name: "OnePlus 12", price: 65000, image: "https://via.placeholder.com/150", description: "OnePlus smartphone" }
    ];
    await Product.insertMany(sampleProducts);
    res.json({ message: "Products seeded" });
};
