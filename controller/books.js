const Book = require("../models/book");

const bookGet = async (req, res) => {
    const books = await Book.find();
    console.log(books);
    
    res.json(books);
}

const bookPost = async (req, res) => {
    console.log(req.body);
    const { author, title, release_year } = req.body;
    const book = new Book({ author, title, release_year });

    // Guardar en BD
    await book.save();

    res.json({
        book
    });
}

module.exports ={
    bookGet,
    bookPost,
}