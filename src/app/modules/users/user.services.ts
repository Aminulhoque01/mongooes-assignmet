import BookModel from "./user.model";

export const createUserToDB= async()=>{
    const user = await new BookModel({
        title: 'This is best Book in the world',
        author: 'Ami',
        genre: "Science fantasy",
        publicationYear: 2021,
        rating: 5.00,
        price: 500,
        publisher: {
            name: 'Ami.com',
            location: 'Bangladesh',
        },
        reviews:{
            id:'4444',
            username: 'azizul',
            comment: 'good',
        },
    });
    await user.save();
    return user;
}
