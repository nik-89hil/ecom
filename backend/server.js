const express = require("express");
// const {books} = require("./data/book");
const app = express();
require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddle")
const PORT = 8080 || process.env.PORT ; 
const userRoutes = require("./routes/UserRoute")
const orderRoutes = require("./routes/orderRoute")
const bookRoutes = require("./routes/booksRoute");
const connectDB = require('./config/config');
const Book = require("./models/book");
const asyncHandler = require("express-async-handler");
const cors = require('cors');
const path = require('path');
// DOTENV $ connect with database
connectDB()

//
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,"../frontendwork/build")))
// console.log(path.join(__dirname,"../frontendwork/build"))




app.use("/api",bookRoutes);
app.use("/api/user",userRoutes);
app.use("/api/order",orderRoutes);
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to node server..</h1>")
})


app.post("/home",async(req,res)=>{
    const search = req.body.search.toUpperCase();
    console.log(search);
   
    switch(search){
        case "HORROR":
            const horresult = await Book.find({category:"HORROR"})
            res.json(horresult);
            console.log(horresult,"from horror here");
            break;
        case "HISTORICALFICTION":
            const hisresult = await Book.find({category:"HISTORICALFICTION"});
            res.json(hisresult);
            console.log(hisresult,"from hitorical frictioon");
            break;
        case "HISTORICAL FICTION":
            const hissresult = await Book.find({category:"HISTORICALFICTION"});
            res.json(hissresult);
            console.log(hissresult,"from hitorical frictioon");
            break;
        case "CLASSIC":
            const clasresult = await Book.find({category:"CLASSIC"})
            res.json(clasresult);
            console.log(search,"from classic server");
            break;
        default:
            res.json({message:"not found this category..."})
            console.log("not found ")
    }
        
    
    
   
    
});


app.use(errorHandler); 

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontendwork/build/index.html"));
})



app.listen(PORT,()=>{
    console.log("server started at port ",PORT)
})