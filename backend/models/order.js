const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    OrderItems:[
        {
            title:{
                type:String,
                required:true,
            },
            qty:{
                type:Number,
                required:true,
            },
            image:{
                type:String,
                required:true,
            },
            price:{
                type:Number,
                required:true,
            },
            book:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Book"
            }
        }
    ],
    shippingAddress:{
        address:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true,
        },
        country:{
            type:String,
            required:true,
        }
    },
    paymentMethod:{
        type:String,
        // required:true,
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0.0,
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false,
    },
    paidAt:{
        type:Date
    },
    isDelevired:{
        type:Boolean,
        required:true,
        default:false,
    },
    DeliveredAt:{
        type:Date,
    }
},{timestamps:true});


const Order = mongoose.model("Order",orderSchema);

module.exports = Order;