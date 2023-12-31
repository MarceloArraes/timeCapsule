import { User } from "lucide-react";
import React from "react";

export function SignIn() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="flex items-center gap-3 text-left transition-colors hover:text-gray-500"
    >
      <div className="h-18 w-18 flex items-center justify-center rounded-full bg-gray-400">
        <User width={40} height={40} className="h-10 w-10 text-gray-500" />
      </div>
      <p className=" max-w-[140px] text-sm leading-snug">
        <span className="underline">Create your account</span> and save your
        memories!
      </p>
    </a>
  );
}
