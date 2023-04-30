import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductPageRoute from "./components/ProductPageRoute";
import Header from "./pages/Header";
import Location from "./components/Location";
import Home from "./pages/Main";
import React from "react";

function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductPageRoute />} />
        <Route path="/donde_estamos" element={<Location />}></Route>
      </Routes>
    </div>
  );
}

export default App;
