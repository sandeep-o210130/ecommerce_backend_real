const User = require('../models/User.js');

exports.addToCart = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);
        const existingItem = user.cart.find(item => item.productId.toString() === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            user.cart.push({ productId, quantity: 1 });
        }

        await user.save();
        res.json({ message: "Added to Cart" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCart = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId).populate("cart.productId");
        res.json(user.cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.buyNow = async (req, res) => {
    res.json({ message: "Order Confirmed ✅" });
};

exports.checkout = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);
        user.cart = [];
        await user.save();
        res.json({ message: "Checkout Successful ✅" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
