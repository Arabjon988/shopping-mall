import { Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/navbar/Navbar";
import Category from "./components/productComponents/category/Category";
import ProductList from "./components/productList/ProductList";
import About from "./views/about/About";
import Login from "./views/auth/Login";
import Basket from "./views/bag/Basket";
import Contact from "./views/contact/Contact";

// import pages
import Home from "./views/home/Home";
import NoMatch from "./views/NoMatch";
import Product from "./views/product/Product";

const AllRoutes = () => {
  const auth = localStorage.getItem("AUTH");

  return (
    <div>
      <Navbar />
      <Routes>
        {auth ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:category" element={<Category />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductList />} />
            <Route path="/cart" element={<Basket />} />
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
