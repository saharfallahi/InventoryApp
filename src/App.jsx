import { useState } from "react";
import "./App.css";
import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";

function App() {
  const [categories, setCategories] = useState([]);
  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <Navbar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductForm categories={categories} />
        </div>
      </div>
    </div>
  );
}

export default App;
