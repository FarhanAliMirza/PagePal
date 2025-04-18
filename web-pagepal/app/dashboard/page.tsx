"use client";
import Profile from "@/components/shared/Profile";
import AddBook from "./_components/AddBook";
import UserBooks from "./_components/UserBooks";
import { User } from "lucide-react";

const page = () => {
  
  return (
    <div>
      <Profile />
      <div className="flex flex-col h-full w-full justify-center items-center py-2 px-5">
        <AddBook />
        <UserBooks />
      </div>
    </div>
  );
};

export default page;
