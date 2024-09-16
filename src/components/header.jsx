import React from 'react';
import Logo from '../assets/imgs/emdalogo.png';
import '../styles/header.css';

export function Header() {
  return (  
  <header className='header-container'>
    <img src={Logo} alt="Logo" className='header-logo' style={{ width: '150px', height: 'auto' }} />
    <h1 className='header-title'>
    Iglesia En las manos del Alfarero
    </h1>
 </header>
  );
}