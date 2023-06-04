const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utility/generateToken")


const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error("User already Exist !!")
    }

    const user = await User.create({name,email,password});
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name.toString(),
            email:user.email,
            isAdmin: user.isAdmin,
            token:generateToken(user._id),

        })
    }else{
        res.status(404);
        throw new Error("User not found ...")
    }
})










const authController = asyncHandler(async(req,res)=>{
   const {email,password} = req.body;
//    console.log(, "is here in server side")
    const user = await User.findOne(req.body);
    if(user){
        res.json({
            _id:user._id,
            name:user.name.toString(),
            email:user.email,
            isAdmin: user.isAdmin,
            token:generateToken(user._id),
        })
    }else{
        res.status(401)
        throw new Error("Invalid email or password")
    }
});



const getUserProfile = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id);
    if(user){
        res.json({
            _id:user._id,
            name:user.name.toString(),
            email:user.email,
            isAdmin: user.isAdmin,
        })
    }else{
        res.status(401)
        throw new Error("User not found")
    }
   res.send("success")
 });

module.exports = {authController,getUserProfile,registerUser}