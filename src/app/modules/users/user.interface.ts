import { HydratedDocument, Model } from "mongoose";


// interface
export interface IBook {
    
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
    rating: number;
    price: number;
    publisher: {
        name: string;
        location: string;
    };
    reviews: Array<{
        id: string,
        username: string;
        comment: string;
    }>;
    featured: string;
}



//interface methods
export interface IUserMethods {
    FullName(): string;
}

// create static methods
export interface UserModel extends Model<IBook, {}, IUserMethods> {
    getBestseller(name: string): Promise<HydratedDocument<IBook, IUserMethods>>;
}

