"use client"

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';


export default function Homepage() {
  const [location, setLocation] = useState('home');
  const changelocation = (target) => {
    setLocation(target);
  }
  return (
    <Navbar location={location} handlelocationchange={changelocation}></Navbar>
  )
}
