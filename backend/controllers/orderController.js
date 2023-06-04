const asyncHandler  = require("express-async-handler");

const Order = require("../models/order");


const addOrderItem = asyncHandler(async(req,res)=>{
    const {OrderItems,shippingAddress,PaymentMethod,itemPrice,shippingPrice,totalPrice} = req.body;
    if(OrderItems && OrderItems.length ===0){
        
        res.status(400).send( new Error("No order found"))
        return
    }else{
        console.log("from backend----------")
        const order = new Order({
            OrderItems:OrderItems,
            User:req.user._id,
            shippingAddress,
            PaymentMethod,
            itemPrice,
            shippingPrice,
            totalPrice,
        })

        console.log(order,"from backend second ---------------------");

        const createOrder= await order.save();
        res.status(201).json({message:"send sucessfully",createOrder})
    }
})

//get order by id 

const getOrderById = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id).populate('User','name email');
    if(order){
        res.json([order])
    }else{
        res.status("Error order not found").status(404)
    }
})

const getMyOrders =asyncHandler(async(req,res)=>{
    const orders = await Order.find({User:req.user._id});
    res.json(orders)
})


module.exports = {addOrderItem , getOrderById, getMyOrders};