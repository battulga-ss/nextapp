"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      window.location.href = "/dashboard";
    } else {
      alert("Login failed");
    }
  };

  const handleGoogleLogin = () =>
    signIn("google", { callbackUrl: "/dashboard" });
  const handleGithubLogin = () =>
    signIn("github", { callbackUrl: "/dashboard" });

  return (
    <div className="flex min-h-screen items-center justify-center gap-6 p-4 flex-wrap">
      {/* Email/password login */}
      <div className="rounded-lg border p-8 shadow-md w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">Sign in</h1>
        <form onSubmit={handleEmailLogin} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-900"
          >
            Sign in
          </button>
        </form>
        <p className="text-center mt-2">
          No account?{" "}
          <a href="/register" className="text-blue-600">
            Register
          </a>
        </p>
      </div>

      {/* Google login */}
      <div className="rounded-lg border p-8 shadow-md w-full max-w-sm flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          Sign in with Google
        </h1>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white border border-gray-300 p-2 rounded hover:bg-gray-100"
        >
          Google
        </button>
      </div>

      {/* Github login */}
      <div className="rounded-lg border p-8 shadow-md w-full max-w-sm flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          Sign in with Github
        </h1>
        <button
          onClick={handleGithubLogin}
          className="w-full bg-white border border-gray-300 p-2 rounded hover:bg-gray-100"
        >
          Github
        </button>
      </div>
    </div>
  );
}
