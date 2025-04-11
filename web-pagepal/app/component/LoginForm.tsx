// app/components/LoginForm.tsx
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  role: "Owner" | "Seeker";
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real API call
    if (email && password) {
      const mockUser: User = {
        name: "John Doe",
        email,
        role: email.includes("owner") ? "Owner" : "Seeker",
      };
      localStorage.setItem("user", JSON.stringify(mockUser));
      router.push(`/dashboard/${mockUser.role.toLowerCase()}`);
    } else {
      alert("Invalid login.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Login
      </button>
    </form>
  );
}
