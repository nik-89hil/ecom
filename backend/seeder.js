const mongoose = require("mongoose");
const Users = require("./data/user");
const {books} = require("./data/book");
const Book = require("./models/book");
const Order = require("./models/order");
const User = require("./models/user");
const connectDB = require("./config/config");



require("dotenv").config();
connectDB();

const importData = async() =>{
    try {
        await Order.deleteMany();
        await Book.deleteMany();
        await User.deleteMany();

        const createUser = await User.insertMany(Users);
        const adminUser = createUser[0]._id;
        console.log(adminUser)
        const sampleData = books.map((book) =>{
            return {...book , User:adminUser}
        })

        console.log(sampleData)

        await Book.insertMany(sampleData);
        console.log("Data Imported !!")
        process.exit();

    } catch (error) {
        console.log(`error message is : ${error}`)
        process.exit(1);
        
    }

}



const dataDestroy = async() =>{
    try {
        await Order.deleteMany();
        await Book.deleteMany();
        await User.deleteMany();
        console.log("data destroy");
        process.exit()
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

if(process.argv[2]=== "-d"){
    dataDestroy()
}else{
    importData();
}