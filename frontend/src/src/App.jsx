import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Destinations from './pages/Destinations';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
