import { exportingBooksModel } from "../models/books.js";

const addBooks = async (req, res) => {
    const { name, rating, language } = req.body;

    if (!name || !rating || !language) {
        return res.json({
            err: true,
            message: "Insert all values."
        });
    }

    const book = new exportingBooksModel({ name, rating, language });
    await book.save();
    res.json(book);
};

const findBooks = async (req, res) => {
    try {
        const booksFound = await exportingBooksModel.find();
        res.json({
            err: false,
            booksFound
        });
    } catch (err) {
        res.json({
            err: true,
            message: err
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await exportingBooksModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!book) {
            return res.json({
                err: true,
                mensagem: "The book wasn't found"
            });
        }
        
        res.json({
            err: false,
            book
        });
    } catch (err) {
        res.json({
            err: true,
            message: err
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await exportingBooksModel.findByIdAndDelete(id);

        if (!book) {
            return res.json({
                erro: true,
                mensagem: "The book wasn't found"
            });
        }

        res.json({
            err: false,
            mensagem: 'The book was successfully deleted.'
        });
    } catch (error) {
        res.json({
            err: true,
            message: error
        });
    }
};


const findBookSingular = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await exportingBooksModel.findById(id);

        if (!book) {
            return res.json({
                err: true,
                message: "The book wasn't found"
            });
        }

        res.json({
            err: false,
            book
        });
    } catch (err) {
        res.json({
            err: true,
            message: err.message
        });
    }
};


export { addBooks, findBooks, updateBook, deleteBook, findBookSingular };
