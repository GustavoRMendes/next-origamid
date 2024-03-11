import Script from 'next/script'
import React from 'react'

export default function ScriptPage() {
  return (
    <>
      <h1>Script</h1>
      <Script
        src='https://api.origamid.online/scripts/idade-legal.min.js'
        strategy='beforeInteractive'
        id='teste'
      />    
    </>
  )
}
