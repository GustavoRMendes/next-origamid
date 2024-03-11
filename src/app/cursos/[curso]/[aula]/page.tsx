import { getAula } from '@/app/api/cursos'
import React from 'react'

interface Curso {
  params: {
    curso: string
    aula: string
  }
}
export default async function AulaPage ({ params }: Curso) {
  const aula = await getAula(params.curso, params.aula)
  return (
    <div>
      <p>{aula.nome}</p>
      <p>{aula.descricao}</p>
      <p>{aula.tempo}</p>
    </div>
  )
}
