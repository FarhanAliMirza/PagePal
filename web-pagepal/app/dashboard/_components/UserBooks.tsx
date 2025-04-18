import BookCard from "@/components/shared/BookCard";

import { useState, useEffect } from "react";
import axios from "axios";

const UserBooks = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://pagepal-production-a709.up.railway.app/api/v1/book/userBooks",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooks(response.data.books);
    } catch (e) {
      console.log("error",e);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
      {books.map((book: any) => (
        <BookCard key={book._id} book={book}></BookCard>
      ))}
    </div>
  );
};

export default UserBooks;
