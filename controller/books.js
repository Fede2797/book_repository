const { response } = require("express");
const Book = require("../models/book");

const bookGet = async (req, res) => {
    try {
        const books = await Book.find({ state: "ACTIVE" });
        console.log( books );
        
        res.json( books );
        
    } catch ( err ) {
        console.log( err );
        res.json( err.message );
    }
}

const bookGetOne = async (req, res) => {
    const { id } = req.params
    try {
        const books = await Book.find({ state: "ACTIVE", _id: id });
        console.log( books );
        
        res.json( books );
        
    } catch ( err ) {
        console.log( err );
        res.json( err.message );
    }
}

const bookPost = async (req, res) => {
    console.log( req.body );
    const { author, title, release_year } = req.body;

    try {
        const book = new Book({ author, title, release_year });

        // Guardar en BD
        await book.save();

        res.json({
            book
        });
    }
    catch( err ) {
        console.log( err );
        res.json( err.message );
    }

}

const bookPut = async (req, res) => {
    try {
        const book = await Book.findById( req.params.id );
    
        res.json( book );
        
    } catch ( err ) {
        console.log( err );
        res.json( err.message );
    }
}

const bookDelete = async (req, res) => {
    const { id } = req.params
    try {
        await Book.findByIdAndUpdate( id, { state: "DELETED" });
        const book = await (Book.findById( id ));
        console.log(book);
    
        res.json( `The book "${book.title}" has been deleted.`);
        
    } catch ( err ) {
        console.log( err );
        res.json( err.message );
    }
}

module.exports ={
    bookGet,
    bookPost,
    bookPut,
    bookDelete,
    bookGetOne
}