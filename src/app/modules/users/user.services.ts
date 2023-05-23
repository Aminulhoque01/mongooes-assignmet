import { IBook } from "./user.interface";
import BookModel from "./user.model";

export const createUserToDB= async(payload:IBook):Promise<IBook>=>{
    const user =  new BookModel(payload);
    await user.save();

    console.log(`This is book in publics:${user.publicationYear},  this is book rating point:${user.rating}`)
    return user;
};

// all book find 
export const getUsersFromBD = async():Promise<IBook[]>=>{
    const Books = await BookModel.find();
    return Books;
};

// singleBook find
export const getBookByIdFromDB = async(payload:any):Promise<IBook | null>=>{
    const singleBook = await BookModel.findOne({ _id:payload });
    return singleBook;
};


export const getBooksByGenre= async(): Promise<IBook[]> =>{
    const books = await BookModel.find({ genre: 'Fantasy'});
    return books;
};

//best seller
export const getBestSell= async() =>{
    const books = await BookModel.getBestseller;
    return books;
     
}

export  const updateBookPrices= async(payload:any):Promise<void> =>{
    try {
      await BookModel.updateMany({_id:payload},
        { $and: [{ publicationYear: { $gt: 2020 } }, { price: { $type: 'number' } }] },
        { $set: { price: { $toInt: '$price' } } }
      ).exec();
  
      console.log('Book prices updated successfully.');
    } catch (error) {
      
      throw new Error('Error updating book prices');
    }
  }
  