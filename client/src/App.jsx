import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Basket from './pages/Basket';
import Add from './pages/Add';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/add" element={<Add />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
