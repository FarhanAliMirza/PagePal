const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://farhanalimirza2003:xvWDpIWYuZ31O11L@userdata.kwoeiyg.mongodb.net/?retryWrites=true&w=majority&appName=userData"
);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  mobileNumber: {
    type: Number,
    required: true,
    minLength: 10,
  },
  email: {
    type: String,
    required: true,
    minLength: 3,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  owner: {
    type: Boolean,
    required: true,
  },
});

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  author: {
    type: String,
    required: true,
    minLength: 3,
  },
  genre: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  contactEmail: {
    type: String,
    required: false,
  },
  contactPhone: {
    type: String,
    required: true,
  },
  avaiablity: {
    type: String,
    required: true,
    default: "Avaiable",
  },
});


const User = mongoose.model("User", userSchema);
const Book = mongoose.model("Book", bookSchema);

module.exports = { User, Book };