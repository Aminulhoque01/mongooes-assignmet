
import mongoose, { Schema, model } from 'mongoose';
import app from './app';


const port: number = 5000;



async function main() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-assignment');
        console.log(`Database connection successful`);

        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
        })


        // interface

        interface IBook {
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

        const BookModel = model<IBook>("Book", BookSchema);

        const createUserToDB= async()=>{
            const user = new BookModel({
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
                    id:'0003',
                    username: 'aminul',
                    comment: 'good',
                },
            });
            await user.save();
            console.log(user)
        }
        createUserToDB();

    } catch (error) {
        console.log(`Failed to connect database`, error);
    }


}
main();


