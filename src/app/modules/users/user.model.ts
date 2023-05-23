import { Model, Schema, model } from "mongoose";
import { IBook, IUserMethods, UserModel } from "./user.interface";


// type UserModel = Model<IBook, {}, IUserMethods>;

// create a schema withe book interface
const BookSchema = new Schema<IBook, UserModel, IUserMethods>({
    
    
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
    featured: {
        type: String,
       
    },
});

BookSchema.static('getBestRating', async function getBestRating() {


    const bestseller = await this.find({ genre: "Science" });
    return bestseller;
});


BookSchema.method('fullName', function fullName() {
    return this.publicationYear.type + ' ' + this.rating.type;
});

BookSchema.statics.findFeaturedBooks = function (): Promise<IBook[]> {
    return this.find({ rating: { $gte: 4 } });
};

BookSchema.pre<IBook>('save', function (next) {
    if (this.rating >= 4.5) {
       console.log( `This book is:${this.featured = 'BestSeller'}`)
    } else {
       console.log(`This Book is:${this.featured = 'normalSeller'}`)
    }
    next();
});

//model
const BookModel = model<IBook, UserModel>("Book", BookSchema);

export default BookModel;