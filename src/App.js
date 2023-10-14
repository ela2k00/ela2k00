import "./App.css";
import React from 'react';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar'; 
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./components/Cart";
import Register from "./pages/Register";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
