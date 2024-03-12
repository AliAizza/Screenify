import React from 'react'
import Image from 'next/image'
import './Navbar.css'

import logo from "/public/assets/logo.svg"
import home from "/public/assets/icon-nav-home.svg"
import movies from "/public/assets/icon-nav-movies.svg"
import series from "/public/assets/icon-nav-tv-series.svg"
import bookmarked from "/public/assets/icon-nav-bookmark.svg"
import profile from "/public/assets/image-avatar.svg"


export default function Navbar({location, handlelocationchange}) {
  const handleClick = (target) => () => {
    handlelocationchange(target);
  }
  return (
    <div className='navbar'>
        <div className='top'>
            <Image src={logo} alt='logo'></Image>

            <div className='page'>
                <Image className={location === 'home' ? 'active' : ''} onClick={handleClick('home')} src={home} alt='home'></Image>
                <Image className={location === 'movies' ? 'active' : ''} onClick={handleClick('movies')} src={movies} alt='movies'></Image>
                <Image className={location === 'series' ? 'active' : ''} onClick={handleClick('series')} src={series} alt='series'></Image>
                <Image className={location === 'bookmarked' ? 'active' : ''} onClick={handleClick('bookmarked')} src={bookmarked} alt='bookmarked'></Image>
            </div>
        </div>
        <Image className='profile' src={profile} alt='profile'></Image>
    </div>
  )
}
