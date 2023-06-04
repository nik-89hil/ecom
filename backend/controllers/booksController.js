const Book = require("../models/book");
const asyncHandler = require("express-async-handler");


const getBooks = asyncHandler(async(req,res)=>{
        const books = await  Book.find({})
    // console.log(books)
    res.json(books);
})

const getBook = asyncHandler(async(req,res)=>{
    const singlebook = await Book.findById(req.params.id);
    if(singlebook){
        res.json(singlebook);

    }else{
        res.status(404).json({message:"Book not found"})
    }
    
});


module.exports ={getBooks,getBook}










