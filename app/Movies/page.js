"use client"

import Trending from '/components/Trending/Trending'
import Search from '/components/Search/Search'
import List from '/components/List/List'
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState('');
  return (
    <div className="home-page">
      <Search handleSearch={setSearch}></Search>
      <List searched={search}></List>
    </div>
  );
}
