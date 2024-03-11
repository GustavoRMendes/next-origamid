import React from 'react'
interface Produtos {
  id: number
  nome: string
}
export default async function ServerFetch() {
  const response = await fetch('https://api.origamid.online/produtos')
  const result = await response.json() as Produtos[]
  return(
    <>
    <ul>
      {result.map((produto)=> 
        <li key={produto.id}>
          {produto.nome}
        </li>
      )}
    </ul>
    </>
  )
}
