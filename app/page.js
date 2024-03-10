"use client"

import Image from "next/image";
import "./globals.css";
import Detailsform from "/components/Detailsform/Detailsform";
import { useState } from "react";

export default function Home() {
  const [logedin, setlog] = useState(false);
  const handleloginchange = (newstate) => {
    setlog(newstate);
  }
  return (
    <main>
      {
      logedin === false ? <Detailsform logedin={logedin} handlelogin={handleloginchange}></Detailsform> : <h1>loged in!</h1>
      }
    </main>
  );
}
