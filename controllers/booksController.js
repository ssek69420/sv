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
                erro: true,
                mensagem: "The book wasn't found"
            });
        }
        
        // Send the updated book as a response
        res.json({
            erro: false,
            book
        });
    } catch (error) {
        res.json({
            erro: true,
            message: error
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
            erro: false,
            mensagem: 'The book was successfully deleted.'
        });
    } catch (error) {
        res.json({
            erro: true,
            message: error
        });
    }
};

export { addBooks, findBooks, updateBook, deleteBook };
