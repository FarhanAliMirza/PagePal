import { useId, useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";
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
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Axis } from "motion/react";

const signupShema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  mobileNumber: z.string().min(10, {
    message: "Mobile number must be at least 10 digits",
  }),
  email: z.string().min(1, {
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  role: z.enum(["seeker", "owner"]),
});

type SignupFormValues = z.infer<typeof signupShema>;

export const SignUpForm = () => {
  const router = useRouter();
  const id = useId();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupShema),
    defaultValues: {
      name: "",
      mobileNumber: "",
      email: "",
      password: "",
      role: "seeker",
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    const owner = data.role === "owner";
    const signUpData = {
      name: data.name,
      mobileNumber: data.mobileNumber,
      email: data.email,
      password: data.password,
      owner: owner,
    };
    try {
      const response = await axios.post(
        "https://pagepal-production-a709.up.railway.app/api/v1/user/signup",
        signUpData
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("owner", response.data.owner);
      toast.success("Signup successful !");
      if (response.data.owner) {
        router.push("/dashboard");
      } else {
        router.push("/discover");
      }
    } catch (e: any) {
      if (e.response.status === 411) {
        toast.error("User already exists !");
      } else {
        toast.error("Something went wrong, please try again !");
      }
    }
  };

  return (
    <Card>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full gap-2"
        >
          <div className="flex flex-col gap-2 mb-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Signup</CardTitle>
              <CardDescription>
                Create an account to start sharing books with others.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <div className="flex items-center w-full max-w-md rounded-lg border border-border bg-inherit text-foreground shadow-sm">
                        <div className="flex items-center px-4 text-muted-foreground bg-inherit h-full rounded-l-lg">
                          +91
                        </div>
                        <Input
                          placeholder="Mobile Number"
                          className="flex-1 rounded-r-lg rounded-l-none border-0 py-2 pr-4 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue
                            className="text-muted-foreground"
                            placeholder="Select a role"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="seeker">Seeker</SelectItem>
                        <SelectItem value="owner">Owner</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </div>
          <CardFooter className="flex justify-end">
            <Button type="submit">Sign Up</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
