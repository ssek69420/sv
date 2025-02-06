import express from 'express'
import mongoose from 'mongoose';
import { booksRoutes } from './routes/booksRoutes.js';

const app = express();
app.use(express.json());

app.use('/books', booksRoutes);


mongoose.connect("mongodb://localhost:27017/crdThing").then(function() {
    console.log("Connected to crdThing");
}).catch((err) => { console.log("An error occurred: " + err); });



app.listen(9021, () => {
    console.log(`Server running at http://localhost:9021`);
});