import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Mainpage from './components/pages/mainpage';
import Navbar1 from './components/navbar1';
import Navbar2 from './components/navbar2';

function App() {
  return (
    <div>
    
    
    <Router>
      
      
        <Mainpage />
       
        <Navbar1/>
        <Navbar2/>
      
        </Router>
      </div>
    
  );
}

export default App;
