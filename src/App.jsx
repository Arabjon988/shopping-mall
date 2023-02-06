import { useEffect, useState } from "react";
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
  
      <Context.Provider value={(products, productsMany)}>
        <div className="App">
          <AllRoutes />
        </div>
      </Context.Provider>
  );
}

export default App;
