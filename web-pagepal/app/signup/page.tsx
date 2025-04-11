"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup success
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-50">
      <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <input name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Name" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Email" required />
        <input name="password" type="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Password" required />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}