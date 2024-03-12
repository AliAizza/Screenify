import React from 'react'
import './Search.css'
import Image from 'next/image'

import search_icon from '/public/assets/icon-search.svg'

export default function Search() {
  return (
    <div className='search'>
        <Image src={search_icon} alt='search-icon'></Image>
        <input type="text" placeholder='Search for movies or TV series' />
        <div className='underline'></div>
    </div>
  )
}
