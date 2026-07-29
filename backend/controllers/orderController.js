import orderModel from './../models/orderModel.js';
import userModel from './../models/userModel.js';

// Placing user order for frontend
const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            payment: true, // Mark payment as completed
            status: "Food Processing"
        });

        // Save order
        await newOrder.save();

        // Clear user's cart
        await userModel.findByIdAndUpdate(req.body.userId, {
            cartData: {}
        });

        res.json({
            success: true,
            message: "Order placed successfully"
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error placing order"
        });
    }
};

// Verify Order (kept for compatibility)
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;

    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, {
                payment: true
            });

            res.json({
                success: true,
                message: "Paid"
            });
        } else {
            await orderModel.findByIdAndDelete(orderId);

            res.json({
                success: false,
                message: "Not Paid"
            });
        }
    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: "Error"
        });
    }
};

// User Orders
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({
            userId: req.body.userId
        });

        res.json({
            success: true,
            data: orders
        });

    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: "Error"
        });
    }
};

// List all orders (Admin)
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});

        res.json({
            success: true,
            data: orders
        });

    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: "Error"
        });
    }
};

// Update order status
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, {
            status: req.body.status
        });

        res.json({
            success: true,
            message: "Status Updated"
        });

    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: "Error"
        });
    }
};

export {
    placeOrder,
    verifyOrder,
    userOrders,
    listOrders,
    updateStatus
};