const express = require("express");
const zod = require("zod");
const { User, Book } = require("../db");
const { authMiddleware } = require("../middleware");

const router = express.Router();

const bookSchema = zod.object({
  title: zod.string(),
  author: zod.string(),
  genre: zod.string(),
  city: zod.string(),
  contactEmail: zod.string(),
  contactPhone: zod.number(),
  avaiablity: zod.string(),
});
//create a new book
router.post("/", authMiddleware, async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ email: req.email });
  if (!user) {
    return res.status(403).json({ message: "User not found" });
  }
  if (!user.owner) {
    return res.status(403).json({ message: "User is not owner" });
  }
  body.contactEmail = req.email;
  body.contactPhone = user.mobileNumber;
  const success = bookSchema.safeParse(body);
  if (!success) {
    return res.status(411).json({ message: "Invalid data" });
  }

  const book = await Book.create(body);
  res.json({ message: "Book created successfully", book });
});
//get all books
router.get("/bulk", authMiddleware, async (req, res) => {
  try {
    const books = await Book.find( {contactEmail : { $ne : req.email }} );
    res.json({ message: "Books retrieved successfully", books });
  } catch (err) {
    res.json({ message: "Error while retrieving books" });
  }
});
//search books
router.get("/search", authMiddleware, async (req, res) => {
  if (!req.query.title) {
    try {
      const books = await Book.find({ city: req.query.city });
      res.json({ message: "Book retrieved successfully", books });
    } catch (err) {
      res.json({ message: "No books found!!" });
    }
  } else if(!req.query.city) {
    try {
      const books = await Book.find({ title: req.query.title });
      res.json({ message: "Book retrieved successfully", books });
    } catch (err) {
      res.json({ message: "No books found!!" });
    }
  }
  else{
    try {
        const books = await Book.find({ title: req.query.title, city: req.query.city });
        res.json({ message: "Book retrieved successfully", books });
      } catch (err) {
        res.json({ message: "No books found!!" });
      }
  }
});
//get all books of a user
router.get("/userBooks", authMiddleware, async (req, res) => {
  try {
    const books = await Book.find({ contactEmail: req.email });
    res.json({ message: "Book retrieved successfully", books });
  } catch (err) {
    res.json({ message: "No books found!!" });
  }
});
//delete a book
router.delete("/userBooks/:id", authMiddleware, async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted successfully", book });
  } catch (err) {
    res.json({ message: "Error while deleting book" });
  }
});
//update a book
router.put("/userBooks/:id", authMiddleware, async (req, res) => {
  const body = req.body;
  const success = bookSchema.safeParse(body);
  if (!success) {
    return res.status(411).json({ message: "Invalid data" });
  }
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, body);
    res.json({ message: "Book updated successfully", book });
  } catch (err) {
    res.json({ message: "Error while updating book" });
  }
});

module.exports = router;
