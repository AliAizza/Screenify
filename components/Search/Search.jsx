import React, { useState } from 'react'
import './Search.css'
import Image from 'next/image'

import search_icon from '/public/assets/icon-search.svg'

export default function Search({handleSearch}) {
  const [inputValue, setInputvalue] = useState('');

  const updateInpytValue = (e) => {
    setInputvalue(e.target.value);
  }

  const handleSearchClick = () => {
    handleSearch(inputValue);
  }

  const handleEnterPress = (e) => {
    if (e.key === 'Enter')
      handleSearch(inputValue);
  }

  return (
    <div className='search'>
        <Image src={search_icon} alt='search-icon' onClick={handleSearchClick}></Image>
        <input type="text" placeholder='Search for movies or TV series' onChange={updateInpytValue} onKeyDown={handleEnterPress}/>
        <div className='underline'></div>
    </div>
  )
}
