
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import "./navbar.css"; // Import the CSS file
import {  Route, Routes } from 'react-router-dom';
import Donate from './pages/donate';
import LoginPage from './pages/loginpage';
import About from './pages/about';

function Navbar1() {

return (
<nav class="navbar1">
    <div class="topnav-right" id="navbarNav">
     <ul>
        <li class="nav-item">
          <a class="nav-link" href="/loginpage">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/donate">Donate❤️</a>
        </li>
      
     </ul>
     </div>
    
        <Routes>
            <Route path="/donate" element={<Donate/>} />
            <Route path="/loginpage" element={<LoginPage/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
     
    
    
 
</nav>


  );
}

export default Navbar1;