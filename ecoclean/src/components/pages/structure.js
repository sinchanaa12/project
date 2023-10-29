import React from 'react';
import '../styles/structure.css';
import Header from './header';

import Main from './main';
import Footer from './footer';

function Structure() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Structure;
