const errorHandler = (error , req,res ,next)=>{
    res.json({
        message:"Something went wrong !!",
        IN:error.message,

    });

    next()
}

module.exports = {errorHandler}