import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Product from "../Components/Product";

export const App = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
