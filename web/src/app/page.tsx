import MemoryDisplay from "@/components/MemoryDisplay";
import { api } from "@/lib/api";
import { cookies } from "next/headers";

export default async function Home() {
  const token = cookies().get("token")?.value;
  const isAuthenticated = Boolean(token);
  console.log("isAuthenticated", isAuthenticated, token);

  if (!isAuthenticated) {
    return <MemoryDisplay memories={null} />;
  }
  const response = await api.get("/memories", {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log("resadsd ", response.data);
  return <MemoryDisplay memories={response.data} />;
}
