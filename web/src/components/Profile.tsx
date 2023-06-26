import { getUser } from "@/lib/auth";
import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

export function Profile() {
  const { name, avatarUrl } = getUser();

  return (
    <a className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div>
        <p className=" max-w-[150px] text-sm leading-snug">
          <span className="underline">{name}</span>
        </p>
        <a
          href=""
          className="text-sm text-red-400 transition-colors duration-500 hover:text-red-300"
        >
          Log Out
        </a>
      </div>
    </a>
  );
}
