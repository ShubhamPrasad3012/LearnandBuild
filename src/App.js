import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Feature';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // or './globals.css'

import './App.css'; // or './globals.css'

import BackgroundElements from './components/Background';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <BackgroundElements />
      <Navbar scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <Features scrollY={scrollY} />
      <About scrollY={scrollY} />
      <Testimonials scrollY={scrollY} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;