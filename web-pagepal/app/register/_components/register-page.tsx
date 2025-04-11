import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { z } from "zod"
import { SignUpForm } from "./sign-up-form";
import { SignInForm } from "./sign-in-form";

const loginSchema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
})


export function RegisterPage() {
  return (
    <Tabs defaultValue="signup" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
        <TabsTrigger value="login">Sign In</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <SignUpForm/>
      </TabsContent>
      <TabsContent value="login">
        <SignInForm/>
      </TabsContent>
    </Tabs>
  )
}

