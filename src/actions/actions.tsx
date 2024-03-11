"use server"

import { cookies } from "next/headers"

export async function LoginApi(username: string,password:string){
  const response = await fetch('https://api.origamid.online/conta/login',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      username,password
    })
  
  })
  console.log(response.ok)
}