import React, { useState } from 'react';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='navbar'>
      <button className='hamburger-icon' onClick={() => setIsOpen(!isOpen)}
      aria-label='Toggle Menu'
      >
         ☰
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/multimedia">Multimedia</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
