import { Schema, model } from "mongoose";
import { IBook } from "./user.interface";

// create a schema withe book interface
const BookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    publicationYear: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    publisher: {
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
    },
    reviews: [
        {
            id: {
                type: String,
                required: true,
                unique: true,
            },
            username: {
                type: String,
                required: true,
                unique: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],
});
//model
const BookModel = model<IBook>("Book", BookSchema);

export default BookModel;