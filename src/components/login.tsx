"use client"
import React, { type FormEvent } from 'react'

export default function Login () {
  async function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const username = event.currentTarget.username.value
    const password = event.currentTarget.password.value
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application-json'
      },
      body: JSON.stringify([username,password])
    })
    if(response.ok) window.location.href = '/'
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Usuário </label>
      <input type="text" id='username' name='username' />
      <label htmlFor='password'>Senha </label>
      <input type="password" id='password' name='password' />
      <button>Enviar</button>
    </form>
  )
}
