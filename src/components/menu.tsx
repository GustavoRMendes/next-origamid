import Link from 'next/link'
import React from 'react'

export default function Menu () {
  return (
    <ul className='menu'>
      <li> <Link href='/'>Início</Link></li>
      <li><Link href='/produtos'>Produtos</Link></li>
      <li><Link href='/produtos/adicionar'>Adicionar Produtos</Link></li>
      <li><Link href='/about'>About</Link> </li>
      <li><Link href='/script'>Script</Link> </li>
      <li><Link href='/acoes'>Ações</Link> </li>
      <li><Link href='/caches'>Caches</Link> </li>
      <li><Link href='/home'>Home1</Link> </li>
      <li><Link href='/home2'>Home2</Link> </li>
      <li><Link href='/images'>Images</Link> </li>
      <li><Link href='/imc'>IMC</Link> </li>
      <li><Link href='/login'>Login</Link> </li>
      
    </ul>
  )
}
