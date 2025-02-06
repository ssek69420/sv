import {Schema, model} from 'mongoose'

const booksSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
        },
        language: {
            type: String,
            required: false
        }
    }
)

const exportingBooksModel = model('BooksModel', booksSchema);

export {exportingBooksModel}