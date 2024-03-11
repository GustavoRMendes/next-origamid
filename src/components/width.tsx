'use client'
import React, { useEffect, useState } from 'react'

export default function Width () {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth)
    };
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [ativo, setAtivo] = useState(false)
  return (
    <div>
      <h2 style={{ color: ativo ? 'green' : 'crimson' }}>Largura da Tela: {width}</h2>
      <button onClick={() => setAtivo((b) => !b)}>Ativar</button>
    </div>
  )
}
