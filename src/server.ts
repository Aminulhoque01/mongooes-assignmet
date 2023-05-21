
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


    } catch (error) {
        console.log(`Failed to connect database`, error);
    }


}
main();


