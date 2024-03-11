import Image from 'next/image'
import React from 'react'
type Animals = {
  id: number,
  nome: string,
  descricao: string,
  imagem: string
}
export default async function ImagesPage () {
  const response = await fetch('https://api.origamid.online/animais')
  const animais = await response.json() as Animals[]

  return (
    <>
      <ul>
        {animais.map((animal) => (
          <li key={animal.id}>
            <h1>{animal.nome}</h1>
            <Image
              src={animal.imagem}
              alt={animal.descricao}
              width={1200}
              height={800}
              quality={75}
              sizes='100vw'
              priority
            />
          </li>
        ))}
      </ul>
    </>

  )
}
