"use client"

import React from 'react'
import "./globals.css";
import Detailsform from "/components/Detailsform/Detailsform";
import Homepage from "/components/Homepage/Homepage";
import { useState } from "react";

export default function () {
  const [logedin, setlog] = useState(false);
  const handleloginchange = (newstate) => {
    setlog(newstate);
  }
  return (
    <div>
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
