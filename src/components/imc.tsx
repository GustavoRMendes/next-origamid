'use client'
import React, { useState } from 'react'

export default function Imc () {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [total, setTotal] = useState('')
  function calcularImc () {
    const imc = Number(peso) / (Number(altura) ** 2)
    Limpe()
    return imc.toFixed(2)
  }
  function Limpe () {
    setPeso('')
    setAltura('')
  }
  return (
    <main>
      <label htmlFor='altura'>Altura:</label>
      <input
        type="text"
        value={altura}
        onChange={(ev) => setAltura(ev.target.value)}
        id='altura'
        name='altura'
      />

      <label htmlFor='peso'>Peso:</label>
      <input
        type="text"
        value={peso}
        onChange={(ev) => setPeso(ev.target.value)}
        id='peso'
        name='peso'
      />
      <button onClick={() => setTotal(calcularImc)}>Calcular</button>
      <h2>
        IMC: {total}
      </h2>
    </main>
  )
}
