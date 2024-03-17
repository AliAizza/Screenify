"use client"

import "./globals.css";
import Trending from '/components/Trending/Trending'
import Search from '/components/Search/Search'
import List from '/components/List/List'
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

import loading from '/public/assets/Animation - 1710692271187.json'

export default function Home() {
  const [width, setWidth] = useState(null);
  const [buff, setBuff] = useState(null);

  useEffect(() => {
  
      const interval = setInterval(() => {
          
        const handleResize = () => {
          setWidth(window.innerWidth);
          setBuff(window.innerWidth > 760 ? 31.875 : 16)
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, 1500); 
    
  }, []);

  const [search, setSearch] = useState('');
  return (
    <>
      {(width && buff) ?
        <div className="home-page">
          <Search handleSearch={setSearch}></Search>
          {search === '' && <Trending buffer={buff} width={width} ></Trending>}
          <List searched={search}></List>
        </div>
        :
        <Lottie className="animation" animationData={loading}/>
      }
    </>
  );
}
