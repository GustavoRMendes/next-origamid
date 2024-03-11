'use server'

import type { Produto } from "@/app/api/productt/produto"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

function validarNome (nome: unknown) {
  return typeof nome === 'string' && nome.length > 1
}
function validarPreco (preco: unknown) {
  return typeof preco === 'number' && preco > 1
}

export async function PostProdutos (formData: FormData) {
  const produto: Produto = {
    nome: formData.get('nome') as string,
    preco: Number(formData.get('preco')),
    estoque: Number(formData.get('estoque')),
    descricao: formData.get('descricao') as string,
    importado: formData.get('importado') ? 1 : 0,
  }
  let erros = []
  if (!validarNome(produto.nome)) erros.push('Nome Inválido.')
  if (!validarPreco(produto.preco)) erros.push('Preço Inválido.')
  if (erros.length > 0) return { erros }
  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      next: { revalidate: 5 },
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(produto)
    })
    if (!response.ok) {
      return Response.json({ error: 'erro na api' })
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: [error.message]
      }
    }
    revalidatePath('/produtos')
    redirect('/produtos')
  }
  return { errors: [] }
}
