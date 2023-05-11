"use client";
import { signIn } from "next-auth/react";
export default function SignInPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Sign In Page</h1>
      <button
        onClick={() => signIn("github")}
        className="p-2 border rounded-lg"
      >
        Sign In
      </button>
    </div>
  );
}
