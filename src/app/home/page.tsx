'use client'
import { SetCookies } from '@/actions/server-actions'
import React from 'react'

export default function Home() {
  async function handleClick(){
    console.log('teste')
    const response = await SetCookies('token','123456')
    console.log(response)
  }
  return (
    <>
      <h2>Home Action</h2>
      <button onClick={handleClick}>Clicar</button>
    
    </>
  )
}
