import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Books from './pages/Books';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Feedback from './pages/Feedback';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
