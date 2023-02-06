import { useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
// import app.css file
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Context from "./context/Context";
import AllRoutes from "./AllRoutes";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [productsMany, setProductsMany] = useState([]);
  
  const [products, setProducts] = useState([]);
  darkMode
    ? (document.body.className = "")
    : (document.body.className = "dark");


  const Contextprovider = {
    darkMode,
    setDarkMode,
  };
  return (
    <CartProvider>
      <Context.Provider value={(products, productsMany)}>
        <div className="App">
          <AllRoutes />
        </div>
      </Context.Provider>
    </CartProvider>
  );
}

export default App;
