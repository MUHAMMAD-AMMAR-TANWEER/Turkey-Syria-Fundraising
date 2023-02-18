'use client'
import { Navbar, Button, Link, Text } from '@nextui-org/react'
import Image from 'next/image'
import topImage from '../../public/turkeyEarthquake.png'
import styles from './navbar.module.css'
import './global.css'
import logo from '../../public/Humanitarian.png'

export default function Navb() {
  const collapseItems: string[] = ['aces']
  return (
    <div className="bg-img">
      <div className="container">
        <div className="topnav">
          <Image
            src={logo}
            alt="logo"
            width={60}
            height={60}
            style={{ marginLeft: '15px' }}
          />
          <a href="#news">Turkey / Syria</a>
          <a href="#contact"></a>
          <a
            href="#about"
            style={{ backgroundColor: '#FF0000', color: 'white' }}
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  )
}
