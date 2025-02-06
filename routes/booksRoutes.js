import express from "express";
const booksRoutes = express.Router();
import { addBooks, updateBook, deleteBook, findBooks, findBookSingular } from "../controllers/booksController.js";

booksRoutes.post('/', addBooks);
booksRoutes.get('/findAll', findBooks);
booksRoutes.get('/findSing/:id', findBookSingular);
booksRoutes.put('/update/:id', updateBook);
booksRoutes.delete('/delete/:id', deleteBook);

export { booksRoutes };