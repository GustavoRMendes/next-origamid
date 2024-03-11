'use client'
import { PostProdutos } from '@/actions/postprodutos'
import React from 'react'
import { useFormStatus } from 'react-dom'

function Button () {
  const status = useFormStatus()
  return <button type='submit' disabled={status.pending}>Adicionar</button>
}


export default function Adicionar () {

  return (
    <>
      <main>
        <h1>Adicionar Produto</h1>
        <form action={PostProdutos}>
          <label htmlFor='nome'>Nome </label>
          <input type="text" id='nome' name='nome' />
          <label htmlFor='preco'>Preço </label>
          <input type="text" id='preco' name='preco' />
          <label htmlFor='descricao'>Descrição </label>
          <input type="text" id='descricao' name='descricao' />
          <label htmlFor='estoque'>Estoque </label>
          <input type="text" id='estoque' name='estoque' />
          <label htmlFor='importado'>
            <input type="checkbox" name="importado" id="importado" />
            Importado
          </label>
          <br />

          <Button />
        </form>
      </main>
    </>
  )
}
