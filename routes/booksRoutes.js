import express from "express";
const booksRoutes = express.Router()
import { addBooks, findBooks, updateBook, deleteBook } from 'controllers/booksController.js'

booksRoutes.get('/', findBooks)
booksRoutes.post('/', addBooks)
booksRoutes.get('/',)

export { booksRoutes }
