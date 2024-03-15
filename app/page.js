"use client"

import "./globals.css";
import Trending from '/components/Trending/Trending'
import Search from '/components/Search/Search'
import List from '/components/List/List'

export default function Home() {
  return (
    <div className="home-page">
      <Search></Search>
      <Trending></Trending>
      <List searched=''></List>
    </div>
  );
}
