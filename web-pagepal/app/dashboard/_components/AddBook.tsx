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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BookPlus, Plus, BookCopy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import axios from "axios";
import { Label } from "@radix-ui/react-dropdown-menu";

const AddBookSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  author: z.string().min(1, {
    message: "Author is required",
  }),
  genre: z.string().min(1, {
    message: "Genre is required",
  }),
  city: z.string().min(1, {
    message: "City is required",
  }),
  availability: z.string().optional(),
});

type AddBookFormValues = z.infer<typeof AddBookSchema>;

const AddBook = () => {
  const router = useRouter();

  const form = useForm<AddBookFormValues>({
    resolver: zodResolver(AddBookSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      city: "",
      availability: "Available",
    },
  });

  const handleDelete = (id: string) => {
    try{
        const response = axios.delete(`https://pagepal-production-a709.up.railway.app/api/v1/book/userBooks/${id}`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response);
        toast.success("Book deleted successfully !");
        router.push("/dashboard");
    }
    catch(e){
      console.log(e);
    }
  };

  const onSubmit = async (data: AddBookFormValues) => {
    try {
      const response = await axios.post(
        "https://pagepal-production-a709.up.railway.app/api/v1/book",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      form.reset();
      console.log(response.data.book._id);
      toast.success(`${data.title} added successfully !`, {
        description: `by ${data.author} at ${data.city}`,
        action: {
            label: "Undo",
            onClick: () => handleDelete(response.data.book._id),
        }
      });
      router.push("/dashboard");
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong !");
    }
  };

  return (
    <div className="flex flex-row h-full w-full items-center justify-end mb-3 gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <BookPlus />
            Add Book
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Book</DialogTitle>
            <DialogDescription>
              Add new book to rent or exchange.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-full space-y-6 justify-center gap-3"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Title"
                        className="w-full rounded-md bg-muted"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Author"
                        className="w-full rounded-md bg-muted"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Genre"
                        className="w-full rounded-md bg-muted"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="City"
                        className="w-full rounded-md bg-muted"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <DialogTrigger asChild>
                  <Button type="submit">
                    <Plus />
                    Add
                  </Button>
                </DialogTrigger>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Button onClick={() => router.push("/discover")}>
        <BookCopy />
        Discover
      </Button>
    </div>
  );
};

export default AddBook;
