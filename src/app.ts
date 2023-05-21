import express,{Application,NextFunction,Request,Response} from 'express';
import cors from "cors";

const app: Application = express();

//Application routes
import userRouter from './app/modules/users/user.route'

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({extends:true}));


app.use('/api/v1/user',userRouter)

export default app;