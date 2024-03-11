'use server'

import { cookies } from "next/headers"

export async function getToken (key: string) {
  cookies().get(key)?.value;
}