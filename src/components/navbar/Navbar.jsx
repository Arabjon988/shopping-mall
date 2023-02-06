import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";

// import navbar.css file
import "./navbar.css";

import { VscColorMode } from "react-icons/vsc";
import { IoLogIn } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const { user } = useContext(Context);
  const {totalUniqueItems} = useCart();

  const { darkMode, setDarkMode } = useContext(Context);

  const handleDark = () => setDarkMode(!darkMode);
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_main">
          <div className="nav_logo">
           <Link to='/products' > <h1 className="nav_logo_text">Venturis</h1></Link>
          </div>
          <div className="nav_links">
            <Link to="/products">
              <span> Home</span>{" "}
            </Link>
            <Link to="/products">
              <span> About</span>{" "}
            </Link>
            <Link to="/products">
              <span> Products</span>{" "}
            </Link>
            <Link to="/products">
              <span> Contact</span>{" "}
            </Link>
          </div>
          <div className="nav_btns">
          {
              user.fullName ? (
                <p className="nav_auth_btn">{user.fullName}</p> 
              ) : (
                <Link to="/">
                <Link to="/login" className="nav_auth_btn">
              <IoLogIn className="nav_btn_icon" />
              <button>Login</button>
            </Link>
                </Link>
              )
            }
            <Link to="/cart" className="nav_auth_btn">
              <FiShoppingCart className="nav_btn_icon" />
              <button>Bag ({totalUniqueItems})</button>
            </Link>
            <div className="nav_mode">
              <VscColorMode onClick={handleDark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
