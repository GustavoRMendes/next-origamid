'use client'

import { revalidatePathAction } from "@/actions/revalidate-path"
import { revalidateTagAction } from "@/actions/revalidate-tags"

export async function Atualizar () {
  // revalidatePathAction('/acoes')
  return <button onClick={() => revalidateTagAction('acoes')}>Atualizar</button>
}