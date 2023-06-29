import jwtDecode from "jwt-decode";
import { cookies } from "next/headers";

interface User {
  sub: string;
  avatarUrl: string;
  name: string;
}

export function getUser(): User {
  console.log("getUser985");
  const token = cookies().get("token")?.value;
  if (!token) throw new Error("Unauthenticated: No token available");

  const user: User = jwtDecode(token);

  return user;
}
