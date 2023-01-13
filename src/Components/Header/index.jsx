import "./index.css";
//import React, { useState } from "react";

function Header() {
  
  return (
    <div className="header">
      <img width={150} src="/img/visaovetlogo.png" alt="logo da empresa" />
      <img className="hamburger" width={80} src="/img/menu.png" alt="menu" />
      <nav className="menu">
        <ul>
          <li>Inicio</li>
          <li>sobre</li>
          <li>contato</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header