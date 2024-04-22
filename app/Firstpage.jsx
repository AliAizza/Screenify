"use client"

import React from 'react'
import "./globals.css";
import Detailsform from "/components/Detailsform/Detailsform";
import Homepage from "/components/Homepage/Homepage";
import { useState, useEffect } from "react";

export default function Firstpage() {
  const [logedin, setlog] = useState(false);
  const handleloginchange = (newstate) => {
    setlog(newstate);
  }
  useEffect(() => {
    document.body.style.overflow = !logedin ? 'hidden' : 'visible';
  }, [logedin]);

  return (
    <div className={logedin ? 'constant' : 'constant above'}>
      {
        logedin === false 
          ?
        <Detailsform logedin={logedin} handlelogin={handleloginchange}></Detailsform>
          :
        <Homepage></Homepage>
      }
    </div>
  );
}

