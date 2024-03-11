type Curso = {
  id: number
  slug: string
  nome: string
  descricao: string
  total_aulas: string
  total_horas: string
}

type Aula = {
  id: number
  slug: string
  nome: string
  descricao: string
  tempo: string
  curso_id: string
  ordem: number
}

export async function getCursos(){
  const response = await fetch('https://api.origamid.online/cursos')
  return await response.json() as Curso[]
}
export async function getCurso(curso:string){
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`)
  return await response.json() as Curso & {
    aulas: Aula[]
  };
}
export async function getAula(curso:string,aula: string){
  const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`)
  return await response.json() as Aula
}