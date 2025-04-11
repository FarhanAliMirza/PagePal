"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-50">
      <h2 className="text-3xl font-bold mb-4">Login to BookSwap</h2>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" placeholder="Password" required />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
