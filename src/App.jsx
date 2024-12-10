import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />

      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;