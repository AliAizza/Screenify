"use client"

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import './Homepage.css'


export default function Homepage() {
  const [location, setLocation] = useState('home');
  const changelocation = (target) => {
    setLocation(target);
  }
  return (
    <div className='home-container'>
      <Navbar location={location} handlelocationchange={changelocation}></Navbar>
      <Search></Search>
    </div>
  )
}
