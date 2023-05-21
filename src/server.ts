
import mongoose, { Schema } from 'mongoose';
import app from './app';


const port: number = 5000;



async function main() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-assignment');
        // console.log(`Database connection successful`);

        // app.listen(port, () => {
        //     console.log(`server is listening on port ${port}`)
        // })


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
                    id:{
                        type:String,
                        required:true,
                        unique:true,
                    },
                    username: {
                        type: String,
                        required: true,
                    },
                    comment: {
                        type: String,
                        required: true,
                    },
                },
            ],
        });

    } catch (error) {
        console.log(`Failed to connect database`, error);
    }


}
main();


