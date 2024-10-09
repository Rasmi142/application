import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AdminPanel from './Pages/Admin/AdminPanel';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='bg-gray-900 min-h-screen'> {/* Moved the div outside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
