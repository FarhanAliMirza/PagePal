"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LayoutDashboard, Moon, Sun, LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";


const Profile = () => {
  const router = useRouter();
  const owner = localStorage.getItem("owner");
  const { setTheme } = useTheme();
  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    localStorage.removeItem("owner");
    router.push("/");
  };

  const handleThemeChange = () => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log("theme changed");
  };
  return (
    <div className="flex items-center justify-end m-5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="h-10 w-10 bg-secondary rounded-full p-2">
            <User />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="gap-2">
          <DropdownMenuItem onClick={()=>{router.push("/dashboard")}} className="mb-1">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem onClick={handleThemeChange}>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                <Sun className="h-[1.2rem] w-[1.2rem]" />
                Light
              </div>
              <div className="absolute flex items-center gap-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                <Moon className="h-[1.2rem] w-[1.2rem]" />
                Dark
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
