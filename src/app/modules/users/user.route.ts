import express from "express";
import { createUser, getBestSelling, getBook, getBookById, getBooks, getBooksByG } from "./user.controller";
const router = express.Router();

router.get('/', getBooks);
router.get('/genre', getBooksByG);
router.get('/rating', getBestSelling);
router.post('/create-user', createUser);
router.patch('/update/:id', getBook);
router.get("/:id", getBookById);

export default router;