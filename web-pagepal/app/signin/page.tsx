"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { RegisterPage } from "./_components/register-page";

const Loginpage = () => {
  const router = useRouter();
  const checkAuth = async () => {
    if (localStorage.getItem("token")) {
      try {
        const response = await axios.get(
          "https://pagepal-production-a709.up.railway.app/api/v1/user",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if(response.data.user.owner){
            router.push("/dashboard");
        }
        else{
            router.push("/discover");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div className="h-screen flex items-center justify-center px-5">
      <RegisterPage />
    </div>
  );
};

export default Loginpage;
