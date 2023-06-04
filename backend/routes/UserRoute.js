const express = require("express");
const {authController,getUserProfile,registerUser} = require("../controllers/userControll")

const router = express.Router();
const {protect} = require("../middleware/authMiddleware")

//for User registration
router.route('/').post(registerUser);

//for login
router.post('/login',authController);


//get user profile with protected

router.route("/profile").get(protect,getUserProfile);

module.exports = router;