import { useState } from "react";
// import app.css file
import "./App.css";


import Context from "./context/Context";
import AllRoutes from "./AllRoutes";

function App() {
  const [user, setUser] = useState({
    fullName: null,
    password: null,
  })
 
  const contextValue = {
    user,
    setUser
  };

  if(user.name !== null && user.password !== null){
    localStorage.setItem('AUTH', true);
    localStorage.setItem('fullName', user.fullName);
  }
  else{
    localStorage.removeItem('AUTH');

  }
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
  
      <Context.Provider value={(products, productsMany, contextValue)}>
        <div className="App">
          <AllRoutes />
        </div>
      </Context.Provider>
  );
}

export default App;
