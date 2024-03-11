import { getCurso } from '@/app/api/cursos'
import Link from 'next/link'
import React from 'react'
interface Curso {
  params: {
    curso: string
  }
}
export default async function Cursopage ({ params }: Curso) {
  const curso = await getCurso(params.curso)
  return (
    <div>
      <p>{curso.nome}</p>
      <p>{curso.descricao}</p>
      <p>{curso.total_aulas}</p>
      <p>{curso.total_horas}</p>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>{aula.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
