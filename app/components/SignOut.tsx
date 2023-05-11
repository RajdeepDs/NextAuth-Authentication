"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <div>
      <button className="p-2 border rounded-lg" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  );
}
