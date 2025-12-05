import react from "react";
import Dashboard from "./Pages/Dashboard";
import Header from "./Pages/Header";
import "../src/Styles/app.css";
import Product from "./Pages/Product";
import Categories from "./Pages/Categories";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="my-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
