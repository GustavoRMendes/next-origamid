import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const body = await request.json() as {username: string,password:string}
  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: body.username,
      password: body.password ,
    }),
  });
  if (!response.ok) {
    return Response.json(
      { error: "Erro na API", autorizado: false },
      { status: 401 }
    );
  }
  const data = await response.json();
  cookies().set("token", data.token, {
    httpOnly: true,
    secure: true,
  });
  return Response.json({ autorizado: true });
}
