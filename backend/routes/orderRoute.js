const express = require('express');
const router = express.Router();
const {addOrderItem , getOrderById, getMyOrders} = require("../controllers/orderController");
const {protect} = require("../middleware/authMiddleware")


//get users order

router.route("/myorders").get(protect,getMyOrders)




// add order in database

router.route("/").post(protect,addOrderItem);

//get order by user id

router.route("/:id").get(protect,getOrderById);




module.exports = router;