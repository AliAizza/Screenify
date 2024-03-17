import React from 'react'
import Image from 'next/image'
import './Navbar.css'

import logo from "/public/assets/logo.svg"
import home from "/public/assets/icon-nav-home.svg"
import movies from "/public/assets/icon-nav-movies.svg"
import series from "/public/assets/icon-nav-tv-series.svg"
import bookmarked from "/public/assets/icon-nav-bookmark.svg"
import profile from "/public/assets/image-avatar.svg"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Navbar() {
  const location = usePathname();
  return (
    <div className='navbar'>
        <div className='top'>
            <Image src={logo} alt='logo'></Image>

            <div className='page'>
                <Link href='/'>
                  <Image className={location === '/' ? 'active' : ''} src={home} alt='home'></Image>
                </Link>
                <Link href='/Movies'>
                  <Image className={location === '/Movies' ? 'active' : ''} src={movies} alt='movies'></Image>
                </Link>
                <Link href='/Series'>
                  <Image className={location === '/Series' ? 'active' : ''} src={series} alt='series'></Image>
                </Link>
                <Link href='/Bookmarked'>
                  <Image className={location === '/Bookmarked' ? 'active bookmark' : 'bookmark'} src={bookmarked} alt='bookmarked'></Image>
                </Link>
            </div>
        </div>
        <Image className='profile' src={profile} alt='profile'></Image>
    </div>
  )
}
