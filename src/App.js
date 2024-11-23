import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './screen/Header';
import Footer from './screen/Footer';
import Home from './screen/Home';
import About from './screen/About';
import Contact from './screen/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer className="App-footer" />
      </Router>
    </div>
  );
}

export default App;