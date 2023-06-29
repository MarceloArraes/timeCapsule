import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("oi");
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  console.log("searchParams", searchParams);

  const redirectTo = request.cookies.get("redirectTo")?.value;

  const registerResponse = await api.post("/register", {
    code,
  });

  const { token } = registerResponse.data;

  const cookieExpireTimeInSeconds = 259200; // one month
  const redirectURL = redirectTo ? redirectTo : new URL("/", request.url);
  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `token=${token}; Path=/; max-age:${cookieExpireTimeInSeconds};`,
    },
  });
}
