// Navbar.js
import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Contact from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import "./navbar.css";
import Structure from './pages/structure';
import Competition from './pages/competitions';
const Navbar2 = () => {
  return (
    <nav className="navbar2">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
         
    <div class="topnav-right" id="navbarNav"> 
    
      <ul className="nav-item">
      <Dropdown className="d-inline mx-2">
      <li>
        <Dropdownn text="About">
        <Dropdown.Item as="button">Our mission</Dropdown.Item>
        <Dropdown.Item as="button" href="/contact">Contact us</Dropdown.Item>
        </Dropdownn>
      
        </li>
        </Dropdown>
        
        <li>
        <Dropdownn text="Services">
            <Link to ="competitions"></Link>
        <Dropdown.Item as="button" Link to="/competitions">Recycling programs</Dropdown.Item>
        <Dropdown.Item as="button" href="/competitions">Competitions</Dropdown.Item>
        </Dropdownn>
        </li>

        <li>
        <Dropdownn text="Learn">
        <Dropdown.Item as="button">Proper waste disposal</Dropdown.Item>
        <Dropdown.Item as="button">Workshops</Dropdown.Item>
        </Dropdownn>
        </li>
        
        <li>
        <Dropdownn text="Initiatives">
        <Dropdown.Item as="button" href="/structure">Infrastructure improvement</Dropdown.Item>
        <Dropdown.Item as="button" href="">Collaboration</Dropdown.Item>
        </Dropdownn>
        </li>
    
    </ul>
   
    </div>
    </Navbar.Brand>
 </Container>


 <Routes>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/structure" element={<Structure/>} />
            <Route path="/competitions" element={<Competition/>} />
        </Routes>
    
    
    </nav>
  );
};



const Dropdownn = ({ text, children }) => (
  <li className="nav-item dropdown">
    <a href="/" className="nav-link dropdown-toggle">
      {text}
    </a>
    <ul className="dropdown-menu">
      {children}
    </ul>
  </li>
);

const DropdownItem = ({ text, link }) => (
  <li>
    <a href={link}>{text}</a>
  </li>
);

export default Navbar2;
