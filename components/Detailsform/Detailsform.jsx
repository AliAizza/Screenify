"use client"

import '/app/globals.css'
import './Detailsform.css'
import Image from 'next/image'
import react from 'react'

import logo from '/public/assets/logo.svg'
import { useState } from 'react'



export default function Detailsform({handlelogin}) {
  const [state, setState] = useState('login');
  const toggleState = () => {
    if(state === 'login')
      setState('signup');
    else
      setState('login');
  }

  const SubmitForm = () => {
    const email = document.getElementById('input1');
    const password = document.getElementById('input2');
    const repeat = document.getElementById('input3');

    const emailerror = document.getElementById('err1');
    const passworderror = document.getElementById('err2');
    const repeaterror = document.getElementById('err3');

    const emailspan = document.getElementById('span1');
    const passwordspan = document.getElementById('span2');
    const repeatspan = document.getElementById('span3');

    if (email.value === ''){
      emailspan.classList.add('error');
      emailerror.classList.add('err');
    }
    else{
      emailspan.classList.remove('error');
      emailerror.classList.remove('err');
    }

    if (password.value === ''){
      passwordspan.classList.add('error');
      passworderror.classList.add('err');
    }
    else{
      passwordspan.classList.remove('error');
      passworderror.classList.remove('err');
    }

    if(state === 'login' && email.value !== '' && password.value !== '')
      handlelogin(true);

    if(state === 'signup'){
      if (repeat.value === ''){
        repeatspan.classList.add('error');
        repeaterror.classList.add('err');
      }
      else{
        repeatspan.classList.remove('error');
        repeaterror.classList.remove('err');
      }
    }

    if(state === 'signup' && email.value !== '' && password.value !== '' && repeat.value !== '')
      handlelogin(true);
  }
  return (
    <div className='container'>
      <Image className='logo' src={logo} alt='could not upload logo'/>
      <div className={state === 'login' ? 'form': 'form expanded'}>
        <h2>Login</h2>
        <div className='in'>
          <p id='err1'>Can’t be empty</p>
          <input type="email" placeholder='Email address' id='input1'/>
          <span className='line-after' id='span1'></span>
        </div>
        <div className='in'>
          <p id='err2'>Can’t be empty</p>
          <input type="password" placeholder='Password' id='input2'/>
          <span className='line-after' id='span2'></span>
        </div>
        <div className={state === 'login' ? 'in abs' : 'in abs shown'}>
          <p id='err3'>Can’t be empty</p>
          <input type="password" placeholder='Repeat password' id='input3'/>
          <span className='line-after' id='span3'></span>
        </div>
        <div className={state === 'login' ? 'down' : 'down opened'}>
          <button onClick={SubmitForm}>{state === 'login' ? 'Login to you account' : 'Create an account'}</button>
          <div className='change'>
            <h6>{state === 'login' ? "Don't have an account?" : "Already have an account?"}</h6>
            <h6 className='toggle' onClick={toggleState}>{state === 'login'? 'Sign Up' : 'Login'}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
