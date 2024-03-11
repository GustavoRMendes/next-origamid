import ServerFetch from '@/components/server-fetch'
import Width from '@/components/width'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Página Sobre'
}
dynamic( () => import ('@/components/width'),{ssr:false})
export default function AboutPage() {
  return (
    <main>
      <h2>Sobre</h2>
      <Width />
      <ServerFetch />
    </main>
  )
}
