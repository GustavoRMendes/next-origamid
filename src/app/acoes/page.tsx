"use client"

import React, { useEffect, useState } from 'react'
type AcoesProps = {
    simbolo: string
    atualizada: string
}
export default  function AcoesPage() {
  const [acoes,setAcoes] = useState<AcoesProps | null>(null)
  useEffect(() => {
    fetch('https://api.origamid.online/acoes/lua')
      .then(response => response.json())
        .then(json => setAcoes(json)) 
  },[])
  if(acoes === null) return null
  return (
    <div>
        Ações da {acoes.simbolo}
        <p>{acoes.atualizada} </p>
    </div>
  )
}
