'use client'
export default function ErrorPage ({ error }: { error: Error }) {
  return (
    <>
      <h2>Olá! Algum erro ocorreu.</h2>
      <p>Erro ocorrido: {error.message}</p>
    </>
  )
}