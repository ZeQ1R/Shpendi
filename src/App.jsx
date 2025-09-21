import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-black text-white">

      <Router basename='/Shpendi'>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Menu />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;