"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import BookCard from "@/components/shared/BookCard";
import axios from "axios";
import { useState, useEffect } from "react";

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  city: string;
  contactEmail: string;
  contactNumber: string;
  availability: string;
}

interface SearchBooksProps {
  search: string;
}

const Discover = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const form = useForm({
    defaultValues: {
      search: "",
    },
  });

  const fetchBooks = async () => {
    const search = form.getValues("search");
    console.log(search);
    try {
      const url = search
        ? `https://pagepal-production-a709.up.railway.app/api/v1/book/search?title=${search}`
        : "https://pagepal-production-a709.up.railway.app/api/v1/book/bulk";

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBooks(response.data.books);
    } catch (e) {
      console.error("Error fetching books:", e);
      setBooks([]); // Clear books on error to avoid rendering stale data
    }
  };

  const handleSearch = (data: SearchBooksProps) => {
    console.log(data);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center py-2 px-5">
      <div className="flex flex-row h-full w-full items-center justify-center mb-3 gap-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSearch)}
            className="flex w-full space-y-6 justify-center gap-3"
          >
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                        <Search className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <Input
                        placeholder="Search..."
                        className="w-full pl-8 rounded-md bg-muted"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Search</Button>
          </form>
        </Form>
      </div>
      {books ? (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 mt-3">
          <div className="text-center">
            <h1 className="text-3xl font-bold">No Books Found</h1>
            <p className="text-muted-foreground">
              Try searching for a different city or title.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discover;
