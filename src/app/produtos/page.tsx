import React from 'react'
import type { Produto } from '../api/productt/produto'
export default async function ProdutosPage () {
  const response = await fetch('https://api.origamid.online/produtos')
  const data = await response.json() as Produto[]
   return (
    <>
      <main>
        <h1>Produtos</h1>
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              {product.nome} : R$ {product.preco}
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}''