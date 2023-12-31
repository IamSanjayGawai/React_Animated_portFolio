import React from 'react';
import "./App.css";
import About from './components/container/About/About';
import Contact from './components/container/Contact/Contact';
import Footer from './components/container/Footer/Footer';
import Home from './components/container/Home/Home';
import Portfolio from './components/container/Portfolio/Portfolio';
import Skills from './components/container/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
