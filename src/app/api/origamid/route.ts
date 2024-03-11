import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export async function GET() {
  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: "dog",
      password: "dog",
    }),
  });
  if (!response.ok) {
    return Response.json({ error: "Erro na API" });
  }
  const data = await response.json();
  cookies().set("token", data.token, {
    httpOnly:true,
    secure:true
  });
  return Response.json(data);
}

export async function POST(request: NextRequest){
  const param = request.nextUrl.searchParams.get('busca')
  const body = await request.json()
  return Response.json({body})
}