type Acoes = {
  atualizada: string
  nome: string
  preco: number
}


export default async function acoesPage(){
  const response = await fetch('https://api.origamid.online/acoes/lua',{
    next: {
      // revalidate: 5
      tags: ['acoes']
    }
  })
  const data  = await response.json() as Acoes

  return (
    <>
      <h1>Ações</h1>
      <p>{data.atualizada}</p>
      <p>{data.nome}</p>
      <p>{data.preco}</p>
    </>
  )
}
