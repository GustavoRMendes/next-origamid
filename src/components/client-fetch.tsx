"use client"
import React, { useEffect, useState } from 'react'
interface Produtos {
  id:number
  nome:string
}
export default function ClientFetch() {
  const [data,setData] = useState<Produtos[]>([])
  useEffect(() => {
    async function fetchProducts(){
      const response = await fetch('https://api.origamid.online/produtos')
      const result = await response.json() as Produtos[] 
      setData(result)
    } 
    fetchProducts()
  },[])
  return (
    <>
      <ul>
      {data.map((produto)=> 
        <li key={produto.id}>
          {produto.nome}
        </li>
      )}
    </ul>
    </>
  )
}
