import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

const loginSchema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

type SigninFormValues = z.infer<typeof loginSchema>;

export const SignInForm = () => {
  const router = useRouter();
  const id = useId();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const form = useForm<SigninFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SigninFormValues) => {
    try{
      const response = await axios.post("https://pagepal-production-a709.up.railway.app/api/v1/user/signin", data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("owner", response.data.owner);
      toast.success("Login successful !");
      if(response.data.owner){
        router.push("/dashboard");
    }
    else{
        router.push("/discover");
    }
    }
    catch(e){
      toast.error("Invalid email or password !");
    }
  };

  return (
    <Card className="h-[400px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-full"
        >
          <div className="flex flex-col gap-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Signup</CardTitle>
              <CardDescription>
                Create an account to start sharing books with others.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 mt-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="*:not-first:mt-2">
                        <div className="relative">
                          <Input
                            id={id}
                            className="pe-9"
                            placeholder="Password"
                            type={isVisible ? "text" : "password"}
                            {...field}
                          />
                          <button
                            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="button"
                            onClick={toggleVisibility}
                            aria-label={
                              isVisible ? "Hide password" : "Show password"
                            }
                            aria-pressed={isVisible}
                            aria-controls="password"
                          >
                            {isVisible ? (
                              <EyeOffIcon size={16} aria-hidden="true" />
                            ) : (
                              <EyeIcon size={16} aria-hidden="true" />
                            )}
                          </button>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </div>
          <div className="flex justify-end">
            <CardFooter>
              <Button type="submit">Sign In</Button>
            </CardFooter>
          </div>
        </form>
      </Form>
    </Card>
  );
};
