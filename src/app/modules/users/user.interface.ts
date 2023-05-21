

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
        id:string,
        username: string;
        comment: string;
    }>;
}