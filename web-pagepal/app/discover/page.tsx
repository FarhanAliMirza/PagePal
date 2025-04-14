"use client";
import Profile from "@/components/shared/Profile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import BookCard from "@/components/shared/BookCard";
import axios from "axios";
import { useState, useEffect } from "react";

const page = () => {
  const [books, setBooks] = useState([]);
  // const [search, setSearch] = useState("");
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://pagepal-production-a709.up.railway.app/api/v1/book/bulk",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooks(response.data.books);
    } catch (e) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="">
      <Profile />
      <div className="flex flex-col h-full w-full justify-center items-center py-2 px-5">
        <div className="flex flex-row h-full w-full items-center justify-center mb-3 gap-2">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <Search className="w-4 h-4 text-muted-foreground" />
              </div>
              <Input
                type="search"
                id="search"
                placeholder="Search..."
                className="w-full pl-8 rounded-md bg-muted"
              />
            </div>
          </div>
          <Button className="">Search</Button>
        </div>
        <div className="w-full h-full grid grid-cols-4 gap-3 mt-3">
          {books.map((book: any) => (
            <BookCard key={book._id}  book={book}></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
