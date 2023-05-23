import { Request, Response, NextFunction } from "express";
import { createUserToDB, getBestSell, getBookByIdFromDB, getBooksByGenre, getUsersFromBD, updateBookPrices } from "./user.services";



export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const user = await createUserToDB(data);

    res.status(200).json({
        status: "success",
        data: user,
    })
};

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUsersFromBD();

    res.status(200).json({
        status: "success",
        data: user,
    })
};


export const getBookById = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    const user = await getBookByIdFromDB({ _id: id });

    res.status(200).json({
        status: "success",
        data: user,
    })
};


export const getBooksByG = async (req: Request, res: Response, next: NextFunction) => {

    // const { genre } = req.params.body;

    const user = await getBooksByGenre();

    res.status(200).json({
        status: "success",
        data: user,
    })
};

//best seller controller

export const getBestSelling = async (req: Request, res: Response, next: NextFunction) => {

    const user = await getBestSell();

    res.status(200).json({
        status: "success",
        data: user,
    })
};


export const getBook = async (req: Request, res: Response, next: NextFunction) => {
    const {id}= req.params;
    const user = await updateBookPrices(id);

    res.status(200).json({
        status: "success",
        data: user,
    })
};
