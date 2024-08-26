import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Product from "./components/Product";
import PaginatedProducts from "./components/PaginatedProducts";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";

function App() {
  return (
    <div className="App">
      <h1>Tanstack Query - React Query</h1>
      {/* <Products />
      <Product /> */}
      {/* <PaginatedProducts /> */}
      {/* <AddProduct /> */}
      {/* <EditProduct /> */}
      <DeleteProduct />
    </div>
  );
}

export default App;
