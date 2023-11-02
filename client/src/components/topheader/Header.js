// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
       
       
      
      <nav>
        
        <ul>
        <a href="/home"> <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/LA_Fitness_logo.svg/1280px-LA_Fitness_logo.svg.png" alt="Logo" /></a>
          <li><a className="custom-nav" href="/home">Home</a></li>
          <li><a className="custom-nav" href="/about">About</a></li>
          <li><a className="custom-nav" href="/services">Services</a></li>
          <li><a className="texpadding custom-nav" href="/contact">Contact</a></li>       
         
          <li><a href="/signup"><button className="custom-button-up"><b>Sign up</b></button></a></li>
          <li><a href="#home"><b>|</b></a></li>
          <li><a href="/signin"><button className="custom-button-in"><b>Sign in</b></button></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
