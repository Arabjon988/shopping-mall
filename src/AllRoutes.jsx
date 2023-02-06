import { Routes, Route } from "react-router-dom";

// import components
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/productComponents/category/Category";
import About from "./views/about/About";
import Basket from "./views/bag/Basket";
import Contact from "./views/contact/Contact";

// import pages
import Home from "./views/home/Home";
import NoMatch from "./views/NoMatch";
import Product from "./views/product/Product";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Basket />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
