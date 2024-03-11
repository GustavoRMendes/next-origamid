"use client"
import React, { type FormEvent } from 'react'

export default function LoginPage () {
  async function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const username = event.currentTarget.username.value
    const password = event.currentTarget.password.value
    console.log({ username, password })

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
