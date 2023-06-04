const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    imageLink:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    pages:{
        type:Number,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    countInStock:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }

})


const Book = mongoose.model('Book',bookSchema);

module.exports =  Book