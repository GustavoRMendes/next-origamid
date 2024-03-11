import Link from 'next/link'
import React from 'react'

export default function Menu () {
  return (
    <ul className='menu'>
      <li> <Link href='/'>Início</Link></li>
      <li><Link href='/produtos'>Produtos</Link></li>
      <li><Link href='/produtos/adicionar'>Adicionar Produtos</Link></li>
      <li><Link href='/script'>Script</Link> </li>
    </ul>
  )
}
