"use client"
import { Inter } from '@next/font/google'
import Navb from './(navbar)/page'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navb/>
      <h1>Hello World</h1>
    </div>
      )
}
