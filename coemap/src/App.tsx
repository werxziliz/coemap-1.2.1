import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Appointments from './pages/Appointments';
import Budget from './pages/Budget';
import FAQ from './pages/FAQ';
import Chat from './pages/Chat';
import Stories from './pages/Stories';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;