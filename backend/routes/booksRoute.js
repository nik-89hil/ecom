const express = require('express');
const router = express.Router();
const {getBooks,getBook} = require("../controllers/booksController");
const asyncHandler = require("express-async-handler");
const Book = require("../models/book");



// for all books

router.route('/books').get(getBooks);

// for selected books (single)
router.route("/books/:id").get(getBook);



//for classic category

router.get("/classics",asyncHandler(async(req,res)=>{
    const classic = await Book.find({category:"CLASSIC"})
    if(classic){
        res.json(classic);
        

    }else{
        res.status(404).json({message:"Book not found"})
    }

}))

//for historical, fiction category


router.get("/historical-fiction",asyncHandler(async(req,res)=>{
    const historic = await Book.find({category:"HISTORICALFICTION"})
    if(historic){
        res.json(historic);

    }else{
        res.status(404).json({message:"Book not found"})
    }

}))

// for horror category

router.get("/horror",asyncHandler(async(req,res)=>{
    const horror = await Book.find({category:"HORROR"})
    if(horror){
        res.json(horror);

    }else{
        res.status(404).json({message:"Book not found"})
    }

}))

// for search 


module.exports = router;