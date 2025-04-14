"use client";
import Profile from "@/components/shared/Profile";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookCard from "@/components/shared/BookCard";
import { BookPlus, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://pagepal-production-a709.up.railway.app/api/v1/book/userBook",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooks(response.data.books);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div>
      <Profile />
      <div className="flex flex-col h-full w-full justify-center items-center py-2 px-5">
        <div className="flex flex-row h-full w-full items-center justify-end mb-3 gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline"><BookPlus/>Add Book</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Book</DialogTitle>
                <DialogDescription>
                  Add new book to rent or exchange.
                </DialogDescription>
              </DialogHeader>
              {/* <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div> */}
              <DialogFooter>
                <Button type="submit"><Plus/>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
