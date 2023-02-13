"use client"
import { Inter } from '@next/font/google'
import SubCard, { Card5 } from './(Card)/page'
import Navb from './(navbar)/page'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navb/>
      <SubCard />
      <Card5 />
    </div>
      )
}
